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

function NewsSection() {
  const { news } = useCardContext();
  const [searchParams, setSearchParams] = useSearchParams();

  const editId = searchParams.get('id');
  const isEditing = searchParams.get('edit') === 'true';
  const isCreating = searchParams.get('create') === 'true';

  const editedCard = news.cards.find((card) => card.id === editId);

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
          <StyledSectionTitle>News</StyledSectionTitle>
          <StyledSectionLabel>Check out the latest news</StyledSectionLabel>
        </StyledSectionLabelAndTitleHolder>
        <button onClick={handleCreateClick}>
          <i className="fa-solid fa-plus"></i>
        </button>
      </StyledSectionTitleAndButton>

      {news.cards.map((card) => (
        <Card
          key={card.id}
          layout="column"
          {...card}
          onEditClick={() => handleEditClick(card.id)}
          onDeleteClick={() => news.deleteCard(card.id)}
        />
      ))}

      {(isEditing || isCreating) && (
        <EditCardModal
          mode={isEditing ? 'edit' : 'create'}
          card={isEditing ? editedCard : undefined}
          onSave={(card) => {
            if (isEditing) {
              news.updateCard(card);
            } else {
              news.addCard(card);
            }
            closeModal();
          }}
          onClose={closeModal}
        />
      )}
    </StyledBaseSection>
  );
}

export default NewsSection;
