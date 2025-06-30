import { StyledPageLayout } from './PageLayout.styles';
import SideBar from './SideBar/SideBar';
import MainContent from './MainContent/MainContent';

function PageLayout() {
  return (
    <StyledPageLayout>
      <SideBar />
      <MainContent />
    </StyledPageLayout>
  );
}

export default PageLayout;
