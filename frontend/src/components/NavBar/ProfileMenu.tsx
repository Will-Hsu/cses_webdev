import { Menu, MenuItem } from '@mui/material';

interface ProfileMenuProps {
    anchorEl: null | HTMLElement;
    onClose: () => void;
};

const ProfileMenu: React.FC<ProfileMenuProps> = ({ anchorEl, onClose }) => {
    return (
        <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={onClose}>
            <MenuItem onClick={onClose}>Edit Profile</MenuItem>
            <MenuItem onClick={onClose}>Settings</MenuItem>
            <MenuItem onClick={onClose}>Logout</MenuItem>
        </Menu>
    );
};

export default ProfileMenu;