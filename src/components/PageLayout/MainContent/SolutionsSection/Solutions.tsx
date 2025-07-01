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

function SolutionsSection() {
  const { solutions } = useCardContext();
  const [searchParams, setSearchParams] = useSearchParams();
  const cardId = searchParams.get('id');
  const isEditing = searchParams.get('edit') === 'true';

  const handleEditClick = (id: string) => {
    setSearchParams({ edit: 'true', id });
  };

  const closeModal = () => {
    setSearchParams({});
  };

  const editedCard = solutions.cards.find((card) => card.id === cardId);

  return (
    <StyledBaseSection>
      <StyledSectionTitleAndButton>
        <StyledSectionLabelAndTitleHolder>
          <StyledSectionTitle>Solutions</StyledSectionTitle>
          <StyledSectionLabel>Find our premium solutions</StyledSectionLabel>
        </StyledSectionLabelAndTitleHolder>
        <button>
          <i className="fa-solid fa-plus"></i>
        </button>
      </StyledSectionTitleAndButton>
      {solutions.cards.map((card) => (
        <Card
          key={card.id}
          layout="column"
          {...card}
          onEditClick={() => handleEditClick(card.id)}
          onDeleteClick={() => solutions.deleteCard(card.id)}
        />
      ))}
      {isEditing && editedCard && (
        <EditCardModal
          card={editedCard}
          onSave={(updated) => {
            solutions.updateCard(updated);
            closeModal();
          }}
          onClose={closeModal}
        />
      )}
    </StyledBaseSection>
  );
}

export default SolutionsSection;
