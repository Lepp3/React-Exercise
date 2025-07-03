import styled from 'styled-components';
import { Link } from 'react-router';

export const StyledSideNavigation = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 15px;
  color: blue;

  @media (max-width: 500px) {
    width: 100%;
    align-items: center;
    flex-direction: row;
  }
`;

export const StyledNavButton = styled(Link)`
  text-decoration: none;
  font-weight: bold;
  color: #356ec9;

  &:hover {
    color: #528deb;
  }
`;
