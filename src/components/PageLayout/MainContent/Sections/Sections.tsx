import { StyledMain } from './Sections.styles';
import HeroSection from './HeroSection/HeroSection';
import SolutionsSection from './SolutionsSection/Solutions';
import FeaturedSection from './FeaturedSection/FeaturedSection';
import NewsSection from './NewsSection/NewsSection';
import EventsSection from './EventsSection/EventsSection';
import PodcastsSection from './PodcastsSection/PodcastsSection';
import { useCardContext } from '../../../../contexts/CardContext/useCardContext';
import EditCardModal from '../EditingModal/EditingModal';
import { StyledWrapper, SectionWrapper } from './Sections.styles';
import { useCardModal } from '../../../../hooks/useCardModal';

function Sections() {
  const { news, solutions, featured, events, podcasts } = useCardContext();

  const { modalState, openCreateModal, openEditModal, closeModal, handleSave } =
    useCardModal();

  return (
    <StyledMain>
      <HeroSection />
      <SectionWrapper>
        <SolutionsSection
          state={solutions}
          onEdit={openEditModal}
          onCreate={openCreateModal}
        />
        <FeaturedSection
          state={featured}
          onEdit={openEditModal}
          onCreate={openCreateModal}
        />
        <StyledWrapper>
          <EventsSection
            state={events}
            onEdit={openEditModal}
            onCreate={openCreateModal}
          />
          <PodcastsSection
            state={podcasts}
            onEdit={openEditModal}
            onCreate={openCreateModal}
          />
        </StyledWrapper>

        <NewsSection
          state={news}
          onEdit={openEditModal}
          onCreate={openCreateModal}
        />

        {modalState.isOpen && (
          <EditCardModal
            mode={modalState.mode}
            card={modalState.card}
            sectionKey={modalState.sectionKey}
            onSave={handleSave}
            onClose={closeModal}
          />
        )}
      </SectionWrapper>
    </StyledMain>
  );
}

export default Sections;
