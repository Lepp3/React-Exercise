import { Routes, Route } from 'react-router';
import Sections from './Sections/Sections';
import SolutionsView from './Views/SolutionsView';
import FeaturedView from './Views/FeaturedView';
import PodcastsView from './Views/PodcastsView';
import NewsView from './Views/NewsView';
import EventsView from './Views/EventsView';

function MainContent() {
  return (
    <Routes>
      <Route path="/" element={<Sections />} />
      <Route path="/solutions" element={<SolutionsView />} />
      <Route path="/featured" element={<FeaturedView />} />
      <Route path="/events" element={<EventsView />} />
      <Route path="/podcasts" element={<PodcastsView />} />
      <Route path="/news" element={<NewsView />} />
    </Routes>
  );
}

export default MainContent;
