import { StyledMain } from './MainContent.styles';
import HeroSection from './HeroSection/HeroSection';
import SolutionsSection from './SolutionsSection/Solutions';
import FeaturedSection from './FeaturedSection/FeaturedSection';
import NewsSection from './NewsSection/NewsSection';
import EventsSection from './EventsSection/EventsSection';
import PodcastsSection from './PodcastsSection/PodcastsSection';

function MainContent() {
  return (
    <StyledMain>
      <HeroSection />
      <SolutionsSection />
      <FeaturedSection />
      <EventsSection />
      <PodcastsSection />
      <NewsSection />
    </StyledMain>
  );
}

export default MainContent;
