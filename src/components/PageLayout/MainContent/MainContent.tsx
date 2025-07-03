import { Routes, Route } from 'react-router';
import Sections from './Sections/Sections';
import SolutionsView from './Views/SolutionsView';

function MainContent() {
  return (
    <Routes>
      <Route path="/" element={<Sections />} />
      <Route path="/solutions" element={<SolutionsView />} />
    </Routes>
  );
}

export default MainContent;
