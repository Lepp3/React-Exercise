import Card from '../Card/Card';
import {
  StyledBaseSection,
  StyledSectionTitleAndButton,
  StyledSectionLabelAndTitleHolder,
  StyledSectionTitle,
  StyledSectionLabel,
} from '../../../../utils/GlobalStyles';
import type { CardData } from '../Card/types/Card.types';
import { type SectionCardState } from '../../../../contexts/CardContext/CardProvider';
import type { SectionKey } from '../../../../contexts/CardContext/CardProvider';

interface SolutionsSectionProps {
  state: SectionCardState;
  onEdit: (sectionKey: SectionKey, card: CardData) => void;
  onCreate: (sectionKey: SectionKey) => void;
}

function SolutionsSection({ state, onEdit, onCreate }: SolutionsSectionProps) {
  return (
    <StyledBaseSection>
      <StyledSectionTitleAndButton>
        <StyledSectionLabelAndTitleHolder>
          <StyledSectionTitle>Solutions</StyledSectionTitle>
          <StyledSectionLabel>Find our premium solutions</StyledSectionLabel>
        </StyledSectionLabelAndTitleHolder>
        <button onClick={() => onCreate('solutions')}>
          <i className="fa-solid fa-plus"></i>
        </button>
      </StyledSectionTitleAndButton>

      {state.cards.map((card: CardData) => (
        <Card
          key={card.id}
          layout="column"
          {...card}
          onEditClick={() => onEdit('solutions', card)}
          onDeleteClick={() => state.deleteCard(card.id)}
        />
      ))}
    </StyledBaseSection>
  );
}

export default SolutionsSection;
