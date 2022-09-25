import React from 'react';
import { Button as MUIButton, ButtonProps } from '@mui/material';
import color from '../themes/color';

export type ButtonProps0 = ButtonProps;

const Button: React.FC<ButtonProps0> = (props) => {
  return (
    <MUIButton
      {...props}
      sx={{
        py: 2,
        minWidth: 300,
        background: color.buttonGradient,
        ...(props.sx || {}),
      }}
    >
      {props.children}
    </MUIButton>
  );
};

export default Button;
