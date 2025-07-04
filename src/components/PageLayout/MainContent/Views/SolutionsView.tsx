import { useCardContext } from '../../../../contexts/CardContext/useCardContext';
import SolutionsSection from '../Sections/SolutionsSection/Solutions';
import { useCardModal } from '../../../../hooks/useCardModal';
import EditCardModal from '../Sections/EditingModal/EditingModal';

function SolutionsView() {
  const { solutions } = useCardContext();
  const { modalState, openCreateModal, openEditModal, closeModal, handleSave } =
    useCardModal();

  return (
    <>
      <SolutionsSection
        state={solutions}
        onCreate={openCreateModal}
        onEdit={openEditModal}
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

export default SolutionsView;
