import Card from '../Card/Card';
import {
  StyledBaseSection,
  StyledSectionTitleAndButton,
  StyledSectionLabelAndTitleHolder,
  StyledSectionTitle,
  StyledSectionLabel,
} from '../../../../utils/GlobalStyles';
import type { SectionProps } from '../SolutionsSection/Solutions';

function FeaturedSection({ state, onEdit, onCreate }: SectionProps) {
  return (
    <StyledBaseSection>
      <StyledSectionTitleAndButton>
        <StyledSectionLabelAndTitleHolder>
          <StyledSectionTitle>Featured</StyledSectionTitle>
          <StyledSectionLabel>
            Learn about our featured solutions
          </StyledSectionLabel>
        </StyledSectionLabelAndTitleHolder>
        <button onClick={() => onCreate('featured')}>
          <i className="fa-solid fa-plus"></i>
        </button>
      </StyledSectionTitleAndButton>

      {state.cards.map((card) => (
        <Card
          key={card.id}
          layout="column"
          {...card}
          onEditClick={() => onEdit('featured', card)}
          onDeleteClick={() => state.deleteCard(card.id)}
        />
      ))}
    </StyledBaseSection>
  );
}

export default FeaturedSection;
