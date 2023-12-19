import { Button as ButtonMUI, ButtonProps } from '@mui/material';
import './Button.scss';
import { memo } from 'react';
import { defVar } from '../../../../var';

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    ochre: true;
    gradient: true;
  }
}

const style = {
  // boxShadow: 1,
  // backgroundColor: {
  //   xs: 'red',
  //   sm: 'blue',
  //   md: 'yellow',
  //   lg: 'purple',
  //   xl: 'green',
  //   xxl: 'black',
  // },
  // '& .MuiFilledInput-root': {
  //   backgroundColor: 'ochre.light',
  // },
};

const CustomButton = memo(function CustomButton({
  children,
  className,
  onClick,
  ...restProps
}: ButtonProps) {
  const props = {
    className: `button ${className}`,
    ...restProps,
  };

  return (
    <ButtonMUI
      disableRipple
      onClick={(e) => onClick && onClick(e)}
      {...props}
      // variant="contained"
      sx={style}
    >
      {children}
    </ButtonMUI>
  );
});

export default CustomButton;
