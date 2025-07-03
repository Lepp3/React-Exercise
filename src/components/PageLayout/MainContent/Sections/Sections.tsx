import { StyledMain } from '../MainContent.styles';
import HeroSection from './HeroSection/HeroSection';
import SolutionsSection from './SolutionsSection/Solutions';
import FeaturedSection from './FeaturedSection/FeaturedSection';
import NewsSection from './NewsSection/NewsSection';
import EventsSection from './EventsSection/EventsSection';
import PodcastsSection from './PodcastsSection/PodcastsSection';
import { type SectionKey } from '../../../../contexts/CardContext/CardProvider';
import { type CardProps } from '../Card/types/Card.types';
import { useState, useEffect } from 'react';
import { useCardContext } from '../../../../contexts/CardContext/useCardContext';
import EditCardModal from './EditingModal/EditingModal';
import { useSearchParams } from 'react-router';
import { StyledWrapper, SectionWrapper } from '../MainContent.styles';

function Sections() {
  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    mode: 'edit' | 'create';
    sectionKey: SectionKey;
    card?: CardProps;
  }>({ isOpen: false, mode: 'create', sectionKey: 'news' });

  const [searchParams, setSearchParams] = useSearchParams();

  const { news, solutions, featured, events, podcasts } = useCardContext();

  const sectionMap = { news, solutions, featured, events, podcasts };

  useEffect(() => {
    const mode =
      searchParams.get('edit') === 'true'
        ? 'edit'
        : searchParams.get('create') === 'true'
        ? 'create'
        : null;

    const sectionKey = searchParams.get('section') as SectionKey;
    const cardId = searchParams.get('id');

    if (!mode || !sectionKey || !sectionMap[sectionKey]) return;

    const section = sectionMap[sectionKey];

    if (mode === 'edit') {
      const card = section.cards.find((c) => c.id === cardId);
      if (!card) return;
      setModalState({ isOpen: true, mode, sectionKey, card });
    }

    if (mode === 'create') {
      setModalState({ isOpen: true, mode, sectionKey });
    }
  }, []); //empty dependency array because I want the useeffect to run once on mount

  const openCreateModal = (sectionKey: SectionKey) => {
    setModalState({ isOpen: true, mode: 'create', sectionKey });
    setSearchParams({ create: 'true', section: sectionKey });
  };

  const openEditModal = (sectionKey: SectionKey, card: CardProps) => {
    setModalState({ isOpen: true, mode: 'edit', sectionKey, card });
    setSearchParams({ edit: 'true', section: sectionKey, id: card.id });
  };

  const closeModal = () => {
    setModalState((prev) => ({ ...prev, isOpen: false }));
    setSearchParams({});
  };

  const handleSave = (card: CardProps, sectionKey: SectionKey) => {
    const section = sectionMap[sectionKey];
    if (modalState.mode === 'edit') {
      section.updateCard(card);
      closeModal();
    } else {
      section.addCard(card);
      closeModal();
    }
  };

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
