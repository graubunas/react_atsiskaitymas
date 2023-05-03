import styled from 'styled-components';

export const StyledContainer = styled.div`
  display: none;

  @media (min-width: 768px) {
    background-color: rgb(242, 135, 125);
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    padding: 25px;
    display: flex;
    max-width: 400px;
  }
`;
