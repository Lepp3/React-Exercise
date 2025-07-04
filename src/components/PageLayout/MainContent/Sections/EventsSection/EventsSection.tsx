import Card from '../../Card/Card';
import {
  StyledSectionTitleAndButton,
  StyledSectionLabelAndTitleHolder,
  StyledSectionTitle,
  StyledSectionLabel,
  StyledSectionActionButton,
  CardWrapper,
} from '../Sections.styles';
import { type SectionProps } from '../types/section.types';
import { StyledHalfSection } from '../Sections.styles';

function EventsSection({
  state,
  onEdit,
  onCreate,
  cardOverrides,
  orientation = 'row',
}: SectionProps) {
  return (
    <StyledHalfSection $orientation={orientation}>
      <StyledSectionTitleAndButton>
        <StyledSectionLabelAndTitleHolder>
          <StyledSectionTitle>Events</StyledSectionTitle>
          <StyledSectionLabel>Newest Events</StyledSectionLabel>
        </StyledSectionLabelAndTitleHolder>
        <StyledSectionActionButton onClick={() => onCreate('events')}>
          <i className="fa-solid fa-plus"></i>
        </StyledSectionActionButton>
      </StyledSectionTitleAndButton>
      <CardWrapper>
        {state.cards.map((card) => (
          <Card
            key={card.id}
            layout="row"
            size="wide"
            {...card}
            {...cardOverrides}
            onEditClick={() => onEdit('events', card)}
            onDeleteClick={() => state.deleteCard(card.id)}
          />
        ))}
      </CardWrapper>
    </StyledHalfSection>
  );
}

export default EventsSection;
