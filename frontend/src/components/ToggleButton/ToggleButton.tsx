import React from 'react';
import MuiToggleButton from '@mui/material/ToggleButton';
import { buttonStyles } from '../Button/styles';

interface ToggleButtonProps {
  text: string;
  isSelected: boolean;
  onClick: () => void;
}

const ToggleButton = ({ text, isSelected, onClick }: ToggleButtonProps) => {
  const style = buttonStyles(false);
  return (
    <MuiToggleButton
      sx={style}
      size="medium"
      onClick={onClick}
      value={text}
    >
      {text}
    </MuiToggleButton>
  );
};

export default ToggleButton;
