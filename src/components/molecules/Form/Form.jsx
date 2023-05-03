import { useState } from 'react';
import Input from '../../atoms/Input/Input';

import { StyledForm, StyledErrorMessage, StyledLabelContainer } from './styles';

const Form = ({ inputs }) => {
  const [notValid, setNotValid] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const validateSubmit = (e) => {
    e.preventDefault();

    const NotValid = inputs.filter((input) =>
      !input.required ? false : input.value ? false : true
    );

    if (!NotValid.length) {
      setNotValid([]);
      handleSubmit();
    } else {
      setNotValid(NotValid);
    }
  };

  return (
    <StyledForm onSubmit={validateSubmit}>
      {inputs.map((input) => (
        <StyledLabelContainer>
          <label>Name</label>
          <Input
            type={input.type}
            icon={input.icon}
            value={input.value}
            setValue={input.setValue}
            placeholder={input.placeholder}
          />
          {notValid.find((x) => x.label === input.label) && (
            <StyledErrorMessage>{input.errorMessage}</StyledErrorMessage>
          )}
        </StyledLabelContainer>
      ))}
    </StyledForm>
  );
};

export default Form;
