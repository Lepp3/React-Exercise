import Card from '../Card/Card';
import {
  StyledSectionTitleAndButton,
  StyledSectionLabelAndTitleHolder,
  StyledSectionTitle,
  StyledSectionLabel,
} from '../../../../utils/GlobalStyles';
import type { SectionProps } from '../SolutionsSection/Solutions';
import { StyledHalfSection } from '../MainContent.styles';

function PodcastsSection({ state, onEdit, onCreate }: SectionProps) {
  return (
    <StyledHalfSection>
      <StyledSectionTitleAndButton>
        <StyledSectionLabelAndTitleHolder>
          <StyledSectionTitle>Podcasts</StyledSectionTitle>
          <StyledSectionLabel>Listen to our latest podcasts</StyledSectionLabel>
        </StyledSectionLabelAndTitleHolder>
        <button onClick={() => onCreate('podcasts')}>
          <i className="fa-solid fa-plus"></i>
        </button>
      </StyledSectionTitleAndButton>

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
