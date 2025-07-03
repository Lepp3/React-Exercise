import { useCardContext } from '../../../../contexts/CardContext/useCardContext';
import PodcastsSection from '../Sections/PodcastsSection/PodcastsSection';
import { useCardModal } from '../../../../hooks/useCardModal';
import EditCardModal from '../Sections/EditingModal/EditingModal';

function PodcastsView() {
  const { podcasts } = useCardContext();
  const sectionMap = { podcasts };
  const { modalState, openCreateModal, openEditModal, closeModal, handleSave } =
    useCardModal(sectionMap);

  return (
    <>
      <PodcastsSection
        state={podcasts}
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

export default PodcastsView;
