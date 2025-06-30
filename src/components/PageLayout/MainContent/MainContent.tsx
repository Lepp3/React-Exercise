import { StyledMain } from './MainContent.styles';
import HeroSection from './HeroSection/HeroSection';
import SolutionsSection from './SolutionsSection/Solutions';
import FeaturedSection from './FeaturedSection/FeaturedSection';
import NewsSection from './NewsSection/NewsSection';

function MainContent() {
  return (
    <StyledMain>
      <HeroSection />
      <SolutionsSection />
      <FeaturedSection />
      <NewsSection />
    </StyledMain>
  );
}

export default MainContent;
