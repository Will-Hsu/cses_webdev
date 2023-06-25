import React from 'react';
import MuiButton from '@mui/material/Button';
import { buttonStyles } from './styles';

interface ButtonProps {
  text: string;
  size?: 'small' | 'medium' | 'large';
  onClick?: () => void;
  isLogin?: boolean;
}

const Button = ({ text, size = 'small', isLogin = false, onClick }: ButtonProps) => {
  const style = buttonStyles(isLogin);
  return (
    <MuiButton sx={style} size={size} variant="outlined" onClick={onClick}>
      {text}
    </MuiButton>
  );
};

export default Button;
