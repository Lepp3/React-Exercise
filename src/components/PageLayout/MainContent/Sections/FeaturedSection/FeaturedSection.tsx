import Card from '../../Card/Card';
import {
  StyledBaseSection,
  StyledSectionTitleAndButton,
  StyledSectionLabelAndTitleHolder,
  StyledSectionTitle,
  StyledSectionLabel,
  StyledSectionActionButton,
  CardWrapper,
} from '../Sections.styles';
import { type SectionProps } from '../types/section.types';

function FeaturedSection({
  state,
  onEdit,
  onCreate,
  cardOverrides,
  orientation = 'row',
}: SectionProps) {
  return (
    <StyledBaseSection $orientation={orientation}>
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
      <CardWrapper>
        {state.cards.map((card, index) =>
          index % 2 == 0 ? (
            <Card
              key={card.id}
              layout="row"
              size="half-wide"
              {...card}
              {...cardOverrides}
              onEditClick={() => onEdit('featured', card)}
              onDeleteClick={() => state.deleteCard(card.id)}
            />
          ) : (
            <Card
              key={card.id}
              layout="row-reverse"
              size="half-wide"
              {...card}
              {...cardOverrides}
              onEditClick={() => onEdit('featured', card)}
              onDeleteClick={() => state.deleteCard(card.id)}
            />
          )
        )}
      </CardWrapper>
    </StyledBaseSection>
  );
}

export default FeaturedSection;
