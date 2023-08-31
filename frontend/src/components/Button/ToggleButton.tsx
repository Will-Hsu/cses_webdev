import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import MuiButton from '@mui/material/Button';
import { buttonStyles } from './styles';

interface ButtonProps {
  text: string;
  onClick?: () => void;
  isLogin?: boolean;
}


const ButtonToggle = ({ text, isLogin = false}: ButtonProps) => {
  const style = buttonStyles(isLogin);
  return (
    <ToggleButton sx={style} value={text}>
        {text}
    </ToggleButton>
  );
};

export default ButtonToggle;


// import * as React from 'react';
// import ToggleButton from '@mui/material/ToggleButton';
// import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

// export default function ColorToggleButton() {


//   return (
//     <ToggleButtonGroup
//       color="primary"
//       exclusive
//       // onChange={handleChange}
//       aria-label="Platform"
//     >
//       {/* <ToggleButton>Web</ToggleButton>
//       <ToggleButton>Android</ToggleButton>
//       <ToggleButton>iOS</ToggleButton> */}
//     </ToggleButtonGroup>
//   );
// }