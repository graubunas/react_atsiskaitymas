import styled from 'styled-components';

export const StyledForm = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 25px;
`;

export const StyledLabelContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledErrorMessage = styled.p`
  margin-top: 0.1rem;
  margin-bottom: 0.5rem;
  display: block;
  color: ${(props) => props.theme.palette.primary.dark};
  font-size: 0.7rem;
  font-weight: 400;
`;
