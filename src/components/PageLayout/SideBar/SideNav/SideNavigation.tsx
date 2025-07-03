import { StyledSideNavigation, StyledNavButton } from './SideNavigation.styles';
import { useUserContext } from '../../../../contexts/UserContext/useUserContext';

function SideNavigation() {
  const { userLogoutHandler } = useUserContext();

  return (
    <StyledSideNavigation>
      <li>
        <StyledNavButton to={'/'}>Home</StyledNavButton>
      </li>
      <li>
        <StyledNavButton to={'/solutions'}>Solutions</StyledNavButton>
      </li>
      <li>
        <StyledNavButton to={'/featured'}>Featured</StyledNavButton>
      </li>
      <li>
        <StyledNavButton to={'/events'}>Events</StyledNavButton>
      </li>
      <li>
        <StyledNavButton to={'/podcasts'}>Podcasts</StyledNavButton>
      </li>
      <li>
        <StyledNavButton to={'/news'}>News</StyledNavButton>
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
