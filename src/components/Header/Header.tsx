import { StyledHeader } from './Header.styles';
import Logo from './Logo/Logo';
import HeaderNav from './HeaderNav/HeaderNav';

function Header() {
  return (
    <StyledHeader>
      <Logo />
      <HeaderNav />
    </StyledHeader>
  );
}

export default Header;
