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

function SolutionsSection({
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
          <StyledSectionTitle>Solutions</StyledSectionTitle>
          <StyledSectionLabel>Find our premium solutions</StyledSectionLabel>
        </StyledSectionLabelAndTitleHolder>
        <StyledSectionActionButton onClick={() => onCreate('solutions')}>
          <i className="fa-solid fa-plus"></i>
        </StyledSectionActionButton>
      </StyledSectionTitleAndButton>
      <CardWrapper>
        {state.cards.map((card) => (
          <Card
            key={card.id}
            layout="column"
            size="narrow"
            {...card}
            {...cardOverrides}
            onEditClick={() => onEdit('solutions', card)}
            onDeleteClick={() => state.deleteCard(card.id)}
          />
        ))}
      </CardWrapper>
    </StyledBaseSection>
  );
}

export default SolutionsSection;
