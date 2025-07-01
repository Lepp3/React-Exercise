import Card from '../Card/Card';
import {
  StyledBaseSection,
  StyledSectionTitleAndButton,
  StyledSectionLabelAndTitleHolder,
  StyledSectionTitle,
  StyledSectionLabel,
} from '../../../../utils/GlobalStyles';
import { useCardContext } from '../../../../contexts/CardContext/useCardContext';
import EditCardModal from '../EditingModal/EditingModal';
import { useSearchParams } from 'react-router';

function EventsSection() {
  const { events } = useCardContext();
  const [searchParams, setSearchParams] = useSearchParams();

  const editId = searchParams.get('id');
  const isEditing = searchParams.get('edit') === 'true';
  const isCreating = searchParams.get('create') === 'true';

  const editedCard = events.cards.find((card) => card.id === editId);

  const closeModal = () => {
    setSearchParams({});
  };

  const handleEditClick = (id: string) => {
    setSearchParams({ edit: 'true', id });
  };

  const handleCreateClick = () => {
    setSearchParams({ create: 'true', section: 'news' });
  };

  return (
    <StyledBaseSection>
      <StyledSectionTitleAndButton>
        <StyledSectionLabelAndTitleHolder>
          <StyledSectionTitle>Events</StyledSectionTitle>
          <StyledSectionLabel>Newest Events</StyledSectionLabel>
        </StyledSectionLabelAndTitleHolder>
        <button onClick={handleCreateClick}>
          <i className="fa-solid fa-plus"></i>
        </button>
      </StyledSectionTitleAndButton>

      {events.cards.map((card) => (
        <Card
          key={card.id}
          layout="column"
          {...card}
          onEditClick={() => handleEditClick(card.id)}
          onDeleteClick={() => events.deleteCard(card.id)}
        />
      ))}

      {(isEditing || isCreating) && (
        <EditCardModal
          mode={isEditing ? 'edit' : 'create'}
          card={isEditing ? editedCard : undefined}
          onSave={(card) => {
            if (isEditing) {
              events.updateCard(card);
            } else {
              events.addCard(card);
            }
            closeModal();
          }}
          onClose={closeModal}
        />
      )}
    </StyledBaseSection>
  );
}

export default EventsSection;
