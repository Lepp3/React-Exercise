import { Routes, Route } from 'react-router';
import Sections from './Sections/Sections';

function MainContent() {
  return (
    <Routes>
      <Route path="/" element={<Sections />} />
    </Routes>
  );
}

export default MainContent;
