import { StyledSideNavigation, StyledNavButton } from './SideNavigation.styles';

function SideNavigation() {
  return (
    <StyledSideNavigation>
      <li>
        <StyledNavButton to={'#'}>Home</StyledNavButton>
      </li>
      <li>
        <StyledNavButton to={'#'}>Articles</StyledNavButton>
      </li>
      <li>
        <StyledNavButton to={'#'}>News</StyledNavButton>
      </li>
      <li>
        <StyledNavButton to={'#'}>Log out</StyledNavButton>
      </li>
    </StyledSideNavigation>
  );
}

export default SideNavigation;
