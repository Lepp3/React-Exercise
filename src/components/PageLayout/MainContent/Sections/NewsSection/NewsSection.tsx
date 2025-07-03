import Card from '../../Card/Card';
import {
  StyledBaseSection,
  StyledSectionTitleAndButton,
  StyledSectionLabelAndTitleHolder,
  StyledSectionTitle,
  StyledSectionLabel,
  StyledSectionActionButton,
} from '../../../../../utils/GlobalStyles';
import type { SectionProps } from '../SolutionsSection/Solutions';

function NewsSection({ state, onEdit, onCreate }: SectionProps) {
  return (
    <StyledBaseSection>
      <StyledSectionTitleAndButton>
        <StyledSectionLabelAndTitleHolder>
          <StyledSectionTitle>News</StyledSectionTitle>
          <StyledSectionLabel>Check out the latest news</StyledSectionLabel>
        </StyledSectionLabelAndTitleHolder>
        <StyledSectionActionButton onClick={() => onCreate('news')}>
          <i className="fa-solid fa-plus"></i>
        </StyledSectionActionButton>
      </StyledSectionTitleAndButton>

      {state.cards.map((card) => (
        <Card
          key={card.id}
          layout="column"
          {...card}
          onEditClick={() => onEdit('news', card)}
          onDeleteClick={() => state.deleteCard(card.id)}
        />
      ))}
    </StyledBaseSection>
  );
}

export default NewsSection;
