import { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import { useGoogleLogin } from '@react-oauth/google';
import { checkUserAPI } from '../api';

interface User {
  name: string;
  email: string;
  major: string;
  expectedGraduationYear: number;
}

interface AuthContextType {
  user: User;
  setUser: (user: User) => void;
  isUcsdEmail: boolean;
  setIsUcsdEmail: (isUcsdEmail: boolean) => void;
  isNewUser: boolean;
  setIsNewUser: (isNewUser: boolean) => void;
  isLoggedIn: boolean;
  setIsLoggedIn: (isLoggedIn: boolean) => void;
  login: () => void;
  logout: () => void;
}

interface AuthProviderProps {
  children: React.ReactNode;
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState({} as User);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isUcsdEmail, setIsUcsdEmail] = useState(true);
  const [isNewUser, setIsNewUser] = useState(false);

  useEffect(() => {
    const verifyToken = async () => {
      try {
        const token = localStorage.getItem('token');
        if (token) {
          const res = await axios.get('https://www.googleapis.com/oauth2/v3/tokeninfo', {
            params: { access_token: token },
          });

          if (res.status === 200 && res.data.aud === process.env.REACT_APP_GOOGLE_CLIENT_ID) {
            const userInfo = await axios.get('https://www.googleapis.com/oauth2/v3/userinfo', {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            });

            setUser(userInfo.data);
            setIsLoggedIn(true);
            setIsUcsdEmail(true);
          }
        }
      } catch (err) {
        console.error(err);
      }
    };

    verifyToken();
  }, []);

  const login = useGoogleLogin({
    flow: 'implicit',
    onSuccess: async (res) => {
      const userInfo = await axios.get('https://www.googleapis.com/oauth2/v3/userinfo', {
        headers: {
          Authorization: `Bearer ${res.access_token}`,
        },
      });

      checkUserAPI({ email: userInfo.data.email }).then((data) => {
        if (data && data.exists === true) {
          setIsNewUser(false);
        } else {
          setIsNewUser(true);
        }
      });

      // TODO: Check if user exists in database
      if (userInfo.data.email.endsWith('@ucsd.edu')) {
        localStorage.setItem('token', res.access_token);
        setUser(userInfo.data);
        setIsUcsdEmail(true);
        setIsLoggedIn(true);
      } else {
        console.log('Login Failed: must use UCSD email');
        setIsUcsdEmail(false);
      }
    },
    onError: () => console.log('Login Failed'),
  });

  const logout = () => {
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        isLoggedIn,
        setIsLoggedIn,
        isUcsdEmail,
        setIsUcsdEmail,
        isNewUser,
        setIsNewUser,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
