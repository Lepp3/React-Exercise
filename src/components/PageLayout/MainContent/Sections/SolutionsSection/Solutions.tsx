import Card from '../../Card/Card';
import {
  StyledBaseSection,
  StyledSectionTitleAndButton,
  StyledSectionLabelAndTitleHolder,
  StyledSectionTitle,
  StyledSectionLabel,
  StyledSectionActionButton,
} from '../../../../../utils/GlobalStyles';
import { type CardProps } from '../../Card/types/Card.types';
import { type SectionCardState } from '../../../../../contexts/CardContext/CardProvider';
import type { SectionKey } from '../../../../../contexts/CardContext/CardProvider';

export interface SectionProps {
  state: SectionCardState;
  onEdit: (sectionKey: SectionKey, card: CardProps) => void;
  onCreate: (sectionKey: SectionKey) => void;
  cardOverrides?: Partial<Pick<CardProps, 'size' | 'layout'>>;
}

function SolutionsSection({
  state,
  onEdit,
  onCreate,
  cardOverrides,
}: SectionProps) {
  return (
    <StyledBaseSection>
      <StyledSectionTitleAndButton>
        <StyledSectionLabelAndTitleHolder>
          <StyledSectionTitle>Solutions</StyledSectionTitle>
          <StyledSectionLabel>Find our premium solutions</StyledSectionLabel>
        </StyledSectionLabelAndTitleHolder>
        <StyledSectionActionButton onClick={() => onCreate('solutions')}>
          <i className="fa-solid fa-plus"></i>
        </StyledSectionActionButton>
      </StyledSectionTitleAndButton>

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
    </StyledBaseSection>
  );
}

export default SolutionsSection;
