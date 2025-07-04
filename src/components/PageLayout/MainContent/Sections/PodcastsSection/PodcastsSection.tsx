import Card from '../../Card/Card';
import {
  StyledSectionLabelAndTitleHolder,
  StyledSectionTitle,
  StyledSectionLabel,
  StyledSectionActionButton,
  CardWrapper,
} from '../Sections.styles';
import { type SectionProps } from '../types/section.types';
import {
  StyledHalfSection,
  StyledHalfSectionHeadings,
} from '../Sections.styles';

function PodcastsSection({
  state,
  onEdit,
  onCreate,
  orientation,
}: SectionProps) {
  return (
    <StyledHalfSection $orientation={orientation}>
      <StyledHalfSectionHeadings>
        <StyledSectionLabelAndTitleHolder>
          <StyledSectionTitle>Podcasts</StyledSectionTitle>
          <StyledSectionLabel>Listen to our latest podcasts</StyledSectionLabel>
        </StyledSectionLabelAndTitleHolder>
        <StyledSectionActionButton onClick={() => onCreate('podcasts')}>
          <i className="fa-solid fa-plus"></i>
        </StyledSectionActionButton>
      </StyledHalfSectionHeadings>
      <CardWrapper>
        {state.cards.map((card) => (
          <Card
            key={card.id}
            layout="column"
            {...card}
            onEditClick={() => onEdit('podcasts', card)}
            onDeleteClick={() => state.deleteCard(card.id)}
          />
        ))}
      </CardWrapper>
    </StyledHalfSection>
  );
}

export default PodcastsSection;
