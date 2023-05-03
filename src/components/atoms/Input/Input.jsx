import { StyledInputWrapper, StyledInput } from './styles';

const Input = (props) => {
  const { type, value, setValue, placeholder, errorMessage } = props;

  return (
    <StyledInputWrapper {...props}>
      <StyledInput
        type={type || 'text'}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
        required
        errorMessage={errorMessage}
      />
    </StyledInputWrapper>
  );
};

export default Input;
