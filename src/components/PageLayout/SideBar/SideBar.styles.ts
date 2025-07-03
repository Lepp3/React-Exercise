import styled from 'styled-components';

export const StyledSide = styled.aside`
  display: flex;
  flex-direction: column;
  background-color: white;
  height: auto;
  width: 150px;
  padding: 20px;
  align-items: left;

  @media (max-width: 500px) {
    width: 100%;
    align-items: center;
    flex-direction: row;
  }
`;
