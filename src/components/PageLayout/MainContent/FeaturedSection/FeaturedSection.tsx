import featuredCardsInfo from '../../../../assets/featuredCardsInfo.json';
import Card from '../Card/Card';
import {
  StyledBaseSection,
  StyledSectionTitleAndButton,
  StyledSectionLabelAndTitleHolder,
  StyledSectionTitle,
  StyledSectionLabel,
} from '../../../../utils/GlobalStyles';
import { type CardData } from '../Card/types/Card.types';

function FeaturedSection() {
  return (
    <StyledBaseSection>
      <StyledSectionTitleAndButton>
        <StyledSectionLabelAndTitleHolder>
          <StyledSectionTitle>Featured</StyledSectionTitle>
          <StyledSectionLabel>Check out our featured apps</StyledSectionLabel>
        </StyledSectionLabelAndTitleHolder>
        <button>
          <i className="fa-solid fa-plus"></i>
        </button>
      </StyledSectionTitleAndButton>
      {featuredCardsInfo.map((card: CardData) => (
        <Card key={card.id} layout="column" {...card} />
      ))}
    </StyledBaseSection>
  );
}

export default FeaturedSection;
