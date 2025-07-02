import Card from '../Card/Card';
import {
  StyledBaseSection,
  StyledSectionTitleAndButton,
  StyledSectionLabelAndTitleHolder,
  StyledSectionTitle,
  StyledSectionLabel,
  StyledSectionActionButton,
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
        <StyledSectionActionButton onClick={() => onCreate('featured')}>
          <i className="fa-solid fa-plus"></i>
        </StyledSectionActionButton>
      </StyledSectionTitleAndButton>

      {state.cards.map((card, index) =>
        index % 2 == 0 ? (
          <Card
            key={card.id}
            layout="row"
            size="half-wide"
            {...card}
            onEditClick={() => onEdit('featured', card)}
            onDeleteClick={() => state.deleteCard(card.id)}
          />
        ) : (
          <Card
            key={card.id}
            layout="row-reverse"
            size="half-wide"
            {...card}
            onEditClick={() => onEdit('featured', card)}
            onDeleteClick={() => state.deleteCard(card.id)}
          />
        )
      )}
    </StyledBaseSection>
  );
}

export default FeaturedSection;
