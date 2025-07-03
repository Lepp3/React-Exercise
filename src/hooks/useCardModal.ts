import {
  type SectionKey,
  type SectionCardState,
} from '../contexts/CardContext/CardProvider';
import { type CardProps } from '../components/PageLayout/MainContent/Card/types/Card.types';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router';

type PartialSectionMap = Partial<Record<SectionKey, SectionCardState>>;

export function useCardModal(sectionMap: PartialSectionMap) {
  const [searchParams, setSearchParams] = useSearchParams();

  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    mode: 'edit' | 'create';
    sectionKey: SectionKey;
    card?: CardProps;
  }>({ isOpen: false, mode: 'create', sectionKey: 'news' });

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
      section!.updateCard(card);
    } else {
      section!.addCard(card);
    }
    closeModal();
  };

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
      if (!card) {
        setSearchParams({});
        return;
      }
      setModalState({ isOpen: true, mode, sectionKey, card });
    }

    if (mode === 'create') {
      setModalState({ isOpen: true, mode, sectionKey });
    }
  }, []);

  return {
    modalState,
    openCreateModal,
    openEditModal,
    closeModal,
    handleSave,
  };
}
