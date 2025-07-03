import { useCardContext } from '../../../../contexts/CardContext/useCardContext';
import SolutionsSection from '../Sections/SolutionsSection/Solutions';
import { useCardModal } from '../../../../hooks/useCardModal';
import EditCardModal from '../Sections/EditingModal/EditingModal';

function SolutionsView() {
  const { solutions } = useCardContext();
  const sectionMap = { solutions };
  const { modalState, openCreateModal, openEditModal, closeModal, handleSave } =
    useCardModal(sectionMap);

  return (
    <>
      <SolutionsSection
        state={solutions}
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

export default SolutionsView;
