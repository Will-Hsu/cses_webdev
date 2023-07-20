import { createContext, useState } from 'react';
import axios from 'axios';
import { useGoogleLogin } from '@react-oauth/google';

interface User {
  name: string;
  email: string;
}

interface AuthContextType {
  user: User;
  setUser: (user: User) => void;
  isUcsdEmail: boolean;
  setIsUcsdEmail: (isUcsdEmail: boolean) => void;
  isNewUser: boolean;
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

  const login = useGoogleLogin({
    flow: 'implicit',
    onSuccess: async (res) => {
      const userInfo = await axios.get('https://www.googleapis.com/oauth2/v3/userinfo', {
        headers: {
          Authorization: `Bearer ${res.access_token}`,
        },
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
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
