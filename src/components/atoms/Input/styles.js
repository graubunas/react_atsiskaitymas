import styled from 'styled-components';

export const StyledInputWrapper = styled.div`
  border-width: 1px;
  border-style: solid;
  border-color: ${(props) => props.theme.palette.default.dark};
  border-radius: 5px;
  padding: calc(0.5em - 1px) calc(0.75em - 1px);
`;

export const StyledInput = styled.input`
  outline: none;
  border: none;
  font-size: 1rem;
  background-color: ${(props) => props.theme.palette.default.main};
  color: ${(props) => props.theme.palette.dark.dark};

  &::placeholder {
    background-color: ${(props) => props.theme.palette.default.main};
    color: ${(props) => props.theme.palette.default.dark};
  }
`;
