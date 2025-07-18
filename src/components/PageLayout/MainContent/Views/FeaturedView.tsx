import { useCardContext } from '../../../../contexts/CardContext/useCardContext';
import FeaturedSection from '../Sections/FeaturedSection/FeaturedSection';
import { useCardModal } from '../../../../hooks/useCardModal';
import EditCardModal from '../EditingModal/EditingModal';

function FeaturedView() {
  const { featured } = useCardContext();
  const { modalState, openCreateModal, openEditModal, closeModal, handleSave } =
    useCardModal();

  return (
    <>
      <FeaturedSection
        state={featured}
        onCreate={openCreateModal}
        onEdit={openEditModal}
        cardOverrides={{ size: 'narrow', layout: 'column' }}
        orientation="column"
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
    </>
  );
}

export default FeaturedView;
