import Card from '../Card/Card';
import {
  StyledBaseSection,
  StyledSectionTitleAndButton,
  StyledSectionLabelAndTitleHolder,
  StyledSectionTitle,
  StyledSectionLabel,
} from '../../../../utils/GlobalStyles';
import type { SectionProps } from '../SolutionsSection/Solutions';

function PodcastsSection({ state, onEdit, onCreate }: SectionProps) {
  return (
    <StyledBaseSection>
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
    </StyledBaseSection>
  );
}

export default PodcastsSection;
