import { StyledHero } from './HeroSection.styles';
import { useUserContext } from '../../../../contexts/UserContext/useUserContext';

function HeroSection() {
  const { authData } = useUserContext();

  return (
    <StyledHero>
      <h1>Hello, {authData.name}</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia, quasi.
      </p>
    </StyledHero>
  );
}

export default HeroSection;
