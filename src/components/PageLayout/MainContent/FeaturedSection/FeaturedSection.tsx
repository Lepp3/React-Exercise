import featuredCardsInfo from '../../../../assets/featuredCardsInfo.json';
import Card from '../Card/Card';
import {
  StyledBaseSection,
  StyledSectionTitleAndButton,
  StyledSectionLabelAndTitleHolder,
  StyledSectionTitle,
  StyledSectionLabel,
} from '../../../../utils/GlobalStyles';

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
      {featuredCardsInfo.map((card) => (
        <Card
          key={card.id}
          layout="column"
          image={card.image}
          description={card.description}
          title={card.name}
          label={card.label}
        />
      ))}
    </StyledBaseSection>
  );
}

export default FeaturedSection;
