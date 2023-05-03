import React from 'react';
import { StyledContainer } from './styles';
import { ReactComponent as Logo } from '../../../shared/images/logo.svg';
import { ReactComponent as Img } from '../../../shared/images/img.svg';

const Image = () => {
  return (
    <StyledContainer>
      <Logo />
      <Img style={{ alignSelf: 'center' }} />
    </StyledContainer>
  );
};

export default Image;
