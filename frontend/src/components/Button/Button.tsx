import React from 'react';
import MuiButton from '@mui/material/Button';
import { buttonStyles } from './styles';

interface ButtonProps {
  color?: string;
  text: string;
  size?: 'small' | 'medium' | 'large';
  onClick?: () => void;
}

const Button = ({ color = 'white', text, size = 'small', onClick }: ButtonProps) => {
  const style = buttonStyles(color);
  return (
    <MuiButton sx={style} size={size} variant="outlined" onClick={onClick}>
      {text}
    </MuiButton>
  );
};

export default Button;
