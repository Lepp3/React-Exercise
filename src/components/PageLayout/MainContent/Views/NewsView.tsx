import { useCardContext } from '../../../../contexts/CardContext/useCardContext';
import NewsSection from '../Sections/NewsSection/NewsSection';
import { useCardModal } from '../../../../hooks/useCardModal';
import EditCardModal from '../Sections/EditingModal/EditingModal';

function NewsView() {
  const { news } = useCardContext();
  const { modalState, openCreateModal, openEditModal, closeModal, handleSave } =
    useCardModal();

  return (
    <>
      <NewsSection
        state={news}
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

export default NewsView;
