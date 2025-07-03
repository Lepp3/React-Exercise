import Card from '../../Card/Card';
import {
  StyledSectionTitleAndButton,
  StyledSectionLabelAndTitleHolder,
  StyledSectionTitle,
  StyledSectionLabel,
  StyledSectionActionButton,
} from '../../../../../utils/GlobalStyles';
import { type SectionProps } from '../SolutionsSection/Solutions';
import { StyledHalfSection } from '../Sections.styles';

function EventsSection({ state, onEdit, onCreate }: SectionProps) {
  return (
    <StyledHalfSection>
      <StyledSectionTitleAndButton>
        <StyledSectionLabelAndTitleHolder>
          <StyledSectionTitle>Events</StyledSectionTitle>
          <StyledSectionLabel>Newest Events</StyledSectionLabel>
        </StyledSectionLabelAndTitleHolder>
        <StyledSectionActionButton onClick={() => onCreate('events')}>
          <i className="fa-solid fa-plus"></i>
        </StyledSectionActionButton>
      </StyledSectionTitleAndButton>

      {state.cards.map((card) => (
        <Card
          key={card.id}
          layout="row"
          size="wide"
          {...card}
          onEditClick={() => onEdit('events', card)}
          onDeleteClick={() => state.deleteCard(card.id)}
        />
      ))}
    </StyledHalfSection>
  );
}

export default EventsSection;
