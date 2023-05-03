import styled from 'styled-components';

export const StyledButton = styled.button`
  width: ${(props) => (props.fullWidth ? '100%' : 'initial')};

  font-size: ${(props) => (props.fullWidth ? '24px' : '18px')};
  border-width: 1px;
  border-style: solid;
  border-radius: 0.375em;
  padding: 10px 25px;

  border-color: ${(props) =>
    props.outline
      ? props.theme.palette.default.dark
      : props.theme.palette.default.main};

  color: ${(props) =>
    props.outline
      ? props.theme.palette.dark.main
      : props.theme.palette.default.main};

  background-color: ${(props) =>
    props.color
      ? props.theme.palette[props.color].main
      : props.color
      ? props.theme.palette.facebook.main
      : props.theme.palette.default.main};

  cursor: pointer;
`;
