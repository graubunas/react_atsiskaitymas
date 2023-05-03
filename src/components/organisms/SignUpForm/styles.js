import styled from 'styled-components';

export const StyledContainer = styled.form`
  display: flex;
  background-color: ${(props) => props.theme.palette.default.main};
  border-radius: 10px;
  flex-grow: 1;
`;

export const StyledFormContainer = styled.div`
  padding: 25px;
`;
export const StyledHeading = styled.h1`
  font-weight: 600;
`;

export const StyledOr = styled.p`
  text-align: center;
  margin: 20px 0;
  font-size: 24px;
`;

export const StyledLoginText = styled.p`
  color: ${(props) => props.theme.palette.primary.main};
  margin-bottom: 15px;
  cursor: pointer;
`;

export const StyledFormControl = styled.div`
  display: flex;
  gap: 20px;
`;

export const StyledFormButtonControl = styled.div`
  margin-top: 25px;
  text-align: center;
`;

export const StyledLabel = styled.label`
  margin-bottom: 0.5rem;
  display: block;
  color: ${(props) => props.theme.palette.dark.main};
  font-size: 1rem;
  font-weight: 700;
`;

export const StyledErrorMessage = styled.p`
  margin-top: 0.1rem;
  margin-bottom: 0.5rem;
  display: block;
  color: ${(props) => props.theme.palette.primary.dark};
  font-size: 0.7rem;
  font-weight: 400;
`;
