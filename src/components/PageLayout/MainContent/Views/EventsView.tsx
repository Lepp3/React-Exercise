import { useCardContext } from '../../../../contexts/CardContext/useCardContext';
import EventsSection from '../Sections/EventsSection/EventsSection';
import { useCardModal } from '../../../../hooks/useCardModal';
import EditCardModal from '../Sections/EditingModal/EditingModal';

function EventsView() {
  const { events } = useCardContext();
  const { modalState, openCreateModal, openEditModal, closeModal, handleSave } =
    useCardModal();

  return (
    <>
      <EventsSection
        state={events}
        onCreate={openCreateModal}
        onEdit={openEditModal}
        cardOverrides={{ size: 'narrow', layout: 'column' }}
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

export default EventsView;
