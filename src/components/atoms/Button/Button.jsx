import React from 'react';
import { StyledButton } from './styles';
import ICONS from '../../../shared/icons';

const Button = ({ text, color, outline, fullWidth }) => {
  return (
    <StyledButton color={color} outline={outline} fullWidth={fullWidth}>
      {outline ? ICONS.google : ICONS.facebook} {text}
    </StyledButton>
  );
};

export default Button;
