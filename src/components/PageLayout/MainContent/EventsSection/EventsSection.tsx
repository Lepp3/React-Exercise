import Card from '../Card/Card';
import {
  StyledSectionTitleAndButton,
  StyledSectionLabelAndTitleHolder,
  StyledSectionTitle,
  StyledSectionLabel,
} from '../../../../utils/GlobalStyles';
import { type SectionProps } from '../SolutionsSection/Solutions';
import { StyledHalfSection } from '../MainContent.styles';

function EventsSection({ state, onEdit, onCreate }: SectionProps) {
  return (
    <StyledHalfSection>
      <StyledSectionTitleAndButton>
        <StyledSectionLabelAndTitleHolder>
          <StyledSectionTitle>Events</StyledSectionTitle>
          <StyledSectionLabel>Newest Events</StyledSectionLabel>
        </StyledSectionLabelAndTitleHolder>
        <button onClick={() => onCreate('events')}>
          <i className="fa-solid fa-plus"></i>
        </button>
      </StyledSectionTitleAndButton>

      {state.cards.map((card) => (
        <Card
          key={card.id}
          layout="column"
          {...card}
          onEditClick={() => onEdit('events', card)}
          onDeleteClick={() => state.deleteCard(card.id)}
        />
      ))}
    </StyledHalfSection>
  );
}

export default EventsSection;
