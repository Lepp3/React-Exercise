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

function NewsSection({ state, onEdit, onCreate, orientation }: SectionProps) {
  return (
    <StyledBaseSection $orientation={orientation}>
      <StyledSectionTitleAndButton>
        <StyledSectionLabelAndTitleHolder>
          <StyledSectionTitle>News</StyledSectionTitle>
          <StyledSectionLabel>Check out the latest news</StyledSectionLabel>
        </StyledSectionLabelAndTitleHolder>
        <StyledSectionActionButton onClick={() => onCreate('news')}>
          <i className="fa-solid fa-plus"></i>
        </StyledSectionActionButton>
      </StyledSectionTitleAndButton>
      <CardWrapper>
        {state.cards.map((card) => (
          <Card
            key={card.id}
            layout="column"
            {...card}
            onEditClick={() => onEdit('news', card)}
            onDeleteClick={() => state.deleteCard(card.id)}
          />
        ))}
      </CardWrapper>
    </StyledBaseSection>
  );
}

export default NewsSection;
