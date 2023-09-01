import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import MuiButton from '@mui/material/Button';
import { buttonStyles } from './styles';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

interface ButtonProps {
  text: string;
  onClick?: () => void;
  isLogin?: boolean;
}

export default function ButtonToggle(isLogin=false, myFunction: (arg0: string) => void, newCategory: string) {
  const [isChecked, setIsChecked] = React.useState(false);

  const handleToggleChange = () => {
    setIsChecked(!isChecked);
  };

  const style = buttonStyles(isLogin);

  return (
    <ToggleButtonGroup
      color="primary"
      value={isChecked}
      exclusive
      onChange={handleToggleChange}
      aria-label="Platform"
    >
      <ToggleButton sx={style} value={'CSES Board'}>
          CSES Board
      </ToggleButton>
      <ToggleButton sx={style} value={'CSES Officers'}>
          CSES Officers
      </ToggleButton>
      <ToggleButton sx={style} value={'Internal Webdev'}>
          Internal Webdev
      </ToggleButton>
      <ToggleButton sx={style} value={'External Webdev'}>
          External Webdev
      </ToggleButton>

    </ToggleButtonGroup>
  );
}




//   const ButtonToggle = ({ text, isLogin = false}: ButtonProps) => {
//     const style = buttonStyles(isLogin);
//     return (
//       <ToggleButton sx={style} value={text}>
//           {text}
//       </ToggleButton>
//     );
//   };
// }


// export default ButtonToggle;


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