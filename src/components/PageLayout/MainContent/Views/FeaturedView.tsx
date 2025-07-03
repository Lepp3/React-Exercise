import { useCardContext } from '../../../../contexts/CardContext/useCardContext';
import FeaturedSection from '../Sections/FeaturedSection/FeaturedSection';
import { useCardModal } from '../../../../hooks/useCardModal';
import EditCardModal from '../Sections/EditingModal/EditingModal';

function FeaturedView() {
  const { featured } = useCardContext();
  const sectionMap = { featured };
  const { modalState, openCreateModal, openEditModal, closeModal, handleSave } =
    useCardModal(sectionMap);

  return (
    <>
      <FeaturedSection
        state={featured}
        onCreate={openCreateModal}
        onEdit={openEditModal}
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
