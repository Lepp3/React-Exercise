import Card from '../Card/Card';
import newsCardsInfo from '../../../../assets/newsCardsInfo.json';
import {
  StyledBaseSection,
  StyledSectionTitleAndButton,
  StyledSectionLabelAndTitleHolder,
  StyledSectionTitle,
  StyledSectionLabel,
} from '../../../../utils/GlobalStyles';

function NewsSection() {
  return (
    <StyledBaseSection>
      <StyledSectionTitleAndButton>
        <StyledSectionLabelAndTitleHolder>
          <StyledSectionTitle>News</StyledSectionTitle>
          <StyledSectionLabel>Check the latest news</StyledSectionLabel>
        </StyledSectionLabelAndTitleHolder>
        <button>
          <i className="fa-solid fa-plus"></i>
        </button>
      </StyledSectionTitleAndButton>
      {newsCardsInfo.map((card) => (
        <Card key={card.id} layout="column" {...card} />
      ))}
    </StyledBaseSection>
  );
}

export default NewsSection;
