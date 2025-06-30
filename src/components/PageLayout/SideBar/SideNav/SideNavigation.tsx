import { StyledSideNavigation, StyledNavButton } from './SideNavigation.styles';
import { useUserContext } from '../../../../contexts/UserContext/useUserContext';

function SideNavigation() {
  const { userLogoutHandler } = useUserContext();

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
        <StyledNavButton to={'#'} onClick={userLogoutHandler}>
          Log out
        </StyledNavButton>
      </li>
    </StyledSideNavigation>
  );
}

export default SideNavigation;
