import Card from '../Card/Card';
import {
  StyledBaseSection,
  StyledSectionTitleAndButton,
  StyledSectionLabelAndTitleHolder,
  StyledSectionTitle,
  StyledSectionLabel,
} from '../../../../utils/GlobalStyles';
import { type CardData } from '../Card/types/Card.types';
import { useCardContext } from '../../../../contexts/CardContext/useCardContext';

function FeaturedSection() {
  const { featured } = useCardContext();

  return (
    <StyledBaseSection>
      <StyledSectionTitleAndButton>
        <StyledSectionLabelAndTitleHolder>
          <StyledSectionTitle>Featured</StyledSectionTitle>
          <StyledSectionLabel>Check out our featured apps</StyledSectionLabel>
        </StyledSectionLabelAndTitleHolder>
        <button>
          <i className="fa-solid fa-plus"></i>
        </button>
      </StyledSectionTitleAndButton>
      {featured.cards.map((card: CardData) => (
        <Card
          key={card.id}
          layout="column"
          {...card}
          onEditClick={() => featured.updateCard(card)}
          onDeleteClick={() => featured.deleteCard(card.id)}
        />
      ))}
    </StyledBaseSection>
  );
}

export default FeaturedSection;
