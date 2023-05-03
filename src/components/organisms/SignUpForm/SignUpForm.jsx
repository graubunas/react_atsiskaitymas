import { useState } from 'react';
import Button from '../../atoms/Button';
import Image from '../../atoms/Image';
import {
  StyledFormControl,
  StyledHeading,
  StyledLoginText,
  StyledOr,
  StyledContainer,
  StyledFormContainer,
  StyledErrorMessage,
} from './styles';
import Form from '../../molecules/Form/Form';

const SignUpForm = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const [signUp, setSignUp] = useState({
    name: '',
    email: '',
    password: '',
  });

  const inputs = [
    {
      type: 'text',
      label: 'Name',
      placeholder: 'Joy Shaheb',
      value: signUp.name,
      setValue: (value) => setSignUp((prev) => ({ ...prev, name: value })),
      required: true,
      errorMessage: 'Required',
    },
    {
      type: 'email',
      label: 'Email',
      placeholder: 'Email',
      value: signUp.email,
      setValue: (value) => setSignUp((prev) => ({ ...prev, email: value })),
      required: true,
      errorMessage: 'Required',
    },
    {
      type: 'password',
      label: 'Password',
      placeholder: 'Password',
      value: signUp.password,
      setValue: (value) => setSignUp((prev) => ({ ...prev, password: value })),
      required: true,
      errorMessage: 'Required',
    },
  ];

  const handleSubmit = () => {
    if (signUp.name || signUp.email || signUp.password === '') {
      setErrorMessage(errorMessage);
    }
  };

  if (errorMessage) {
    return <StyledErrorMessage>{errorMessage}</StyledErrorMessage>;
  }

  return (
    <StyledContainer>
      <Image />
      <StyledFormContainer>
        <StyledHeading>Get Started</StyledHeading>
        <p>Already have an account?</p>
        <StyledLoginText>Log In</StyledLoginText>
        <StyledFormControl>
          <Button text='sign up' outline />
          <Button text='sign up' color='facebook' />
        </StyledFormControl>
        <StyledOr>Or</StyledOr>
        <Form inputs={inputs} />
        <Button
          text='Submit'
          fullWidth
          color='primary'
          handleSubmit={handleSubmit}
        />
      </StyledFormContainer>
    </StyledContainer>
  );
};

export default SignUpForm;
