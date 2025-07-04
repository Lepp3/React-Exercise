import { useCardContext } from '../../../../contexts/CardContext/useCardContext';
import PodcastsSection from '../Sections/PodcastsSection/PodcastsSection';
import { useCardModal } from '../../../../hooks/useCardModal';
import EditCardModal from '../EditingModal/EditingModal';

function PodcastsView() {
  const { podcasts } = useCardContext();
  const { modalState, openCreateModal, openEditModal, closeModal, handleSave } =
    useCardModal();

  return (
    <>
      <PodcastsSection
        state={podcasts}
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

export default PodcastsView;
