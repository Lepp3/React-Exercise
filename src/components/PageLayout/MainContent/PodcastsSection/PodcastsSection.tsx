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

function PodcastsSection() {
  const { podcasts } = useCardContext();
  const [searchParams, setSearchParams] = useSearchParams();

  const editId = searchParams.get('id');
  const isEditing = searchParams.get('edit') === 'true';
  const isCreating = searchParams.get('create') === 'true';

  const editedCard = podcasts.cards.find((card) => card.id === editId);

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
          <StyledSectionTitle>Podcasts</StyledSectionTitle>
          <StyledSectionLabel>Listen to our latest podcasts</StyledSectionLabel>
        </StyledSectionLabelAndTitleHolder>
        <button onClick={handleCreateClick}>
          <i className="fa-solid fa-plus"></i>
        </button>
      </StyledSectionTitleAndButton>

      {podcasts.cards.map((card) => (
        <Card
          key={card.id}
          layout="column"
          {...card}
          onEditClick={() => handleEditClick(card.id)}
          onDeleteClick={() => podcasts.deleteCard(card.id)}
        />
      ))}

      {(isEditing || isCreating) && (
        <EditCardModal
          mode={isEditing ? 'edit' : 'create'}
          card={isEditing ? editedCard : undefined}
          onSave={(card) => {
            if (isEditing) {
              podcasts.updateCard(card);
            } else {
              podcasts.addCard(card);
            }
            closeModal();
          }}
          onClose={closeModal}
        />
      )}
    </StyledBaseSection>
  );
}

export default PodcastsSection;
