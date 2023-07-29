import { useState } from 'react';
import { Box, IconButton } from '@mui/material';
import { AccountCircle } from '@mui/icons-material';
import ProfileMenu from './ProfileMenu';

const ProfileDropdown: React.FC = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const handleMenuOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    return (
        <Box>
            <IconButton onClick={handleMenuOpen} color="inherit">
                <AccountCircle/>
            </IconButton>
            <ProfileMenu anchorEl={anchorEl} onClose={handleMenuClose}/>
        </Box>
    );
};

export default ProfileDropdown;
