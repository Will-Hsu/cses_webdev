import { Menu, MenuItem } from '@mui/material';
import { AuthContext } from '../../context/AuthContext';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

interface ProfileMenuProps {
  anchorEl: null | HTMLElement;
  onClose: () => void;
}

const ProfileMenu: React.FC<ProfileMenuProps> = ({ anchorEl, onClose }) => {
  const navigate = useNavigate();
  const { logout } = useContext(AuthContext);
  return (
    <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={onClose}>
      <MenuItem
        onClick={() => {
          navigate('/editprofile', { replace: true });
          // BAND-AID FIX
          window.location.reload();
        }}
      >
        Edit Profile
      </MenuItem>
      {/*<MenuItem onClick={onClose}>Settings</MenuItem>*/}
      <MenuItem onClick={logout}>Logout</MenuItem>
    </Menu>
  );
};

export default ProfileMenu;
