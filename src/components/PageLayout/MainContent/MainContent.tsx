import { StyledMain } from './MainContent.styles';
import { StyledBaseSection } from '../../../utils/GlobalStyles';
import HeroSection from './HeroSection/HeroSection';
import SolutionsSection from './SolutionsSection/Solutions';

function MainContent() {
  return (
    <StyledMain>
      <HeroSection />
      <SolutionsSection />
      <StyledBaseSection />
      <StyledBaseSection />
    </StyledMain>
  );
}

export default MainContent;
