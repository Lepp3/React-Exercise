import Card from '../Card/Card';
import {
  StyledSectionLabelAndTitleHolder,
  StyledSectionTitle,
  StyledSectionLabel,
  StyledSectionActionButton,
} from '../../../../utils/GlobalStyles';
import type { SectionProps } from '../SolutionsSection/Solutions';
import {
  StyledHalfSection,
  StyledHalfSectionHeadings,
} from '../MainContent.styles';

function PodcastsSection({ state, onEdit, onCreate }: SectionProps) {
  return (
    <StyledHalfSection>
      <StyledHalfSectionHeadings>
        <StyledSectionLabelAndTitleHolder>
          <StyledSectionTitle>Podcasts</StyledSectionTitle>
          <StyledSectionLabel>Listen to our latest podcasts</StyledSectionLabel>
        </StyledSectionLabelAndTitleHolder>
        <StyledSectionActionButton onClick={() => onCreate('podcasts')}>
          <i className="fa-solid fa-plus"></i>
        </StyledSectionActionButton>
      </StyledHalfSectionHeadings>

      {state.cards.map((card) => (
        <Card
          key={card.id}
          layout="column"
          {...card}
          onEditClick={() => onEdit('podcasts', card)}
          onDeleteClick={() => state.deleteCard(card.id)}
        />
      ))}
    </StyledHalfSection>
  );
}

export default PodcastsSection;
