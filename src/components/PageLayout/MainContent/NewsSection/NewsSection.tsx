import Card from '../Card/Card';
import {
  StyledBaseSection,
  StyledSectionTitleAndButton,
  StyledSectionLabelAndTitleHolder,
  StyledSectionTitle,
  StyledSectionLabel,
} from '../../../../utils/GlobalStyles';
import { useCardContext } from '../../../../contexts/CardContext/useCardContext';

function NewsSection() {
  const { news } = useCardContext();
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
      {news.cards.map((card) => (
        <Card key={card.id} layout="column" {...card} />
      ))}
    </StyledBaseSection>
  );
}

export default NewsSection;
