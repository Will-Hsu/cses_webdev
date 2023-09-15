import React from 'react';
import MuiButton from '@mui/material/Button';
import { buttonStyles } from './styles';

interface ButtonProps {
  text: string;
  size?: 'small' | 'medium' | 'large';
  onClick?: () => void;
  isLogin?: boolean;
  inactive?: boolean;
}

const Button = ({
  text,
  size = 'small',
  isLogin = false,
  onClick,
  inactive = false,
}: ButtonProps) => {
  const style = buttonStyles(isLogin, inactive);
  return (
    <MuiButton sx={style} size={size} variant="outlined" onClick={onClick}>
      {text}
    </MuiButton>
  );
};

export default Button;
