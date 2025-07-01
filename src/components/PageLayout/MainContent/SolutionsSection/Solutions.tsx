import Card from '../Card/Card';
import {
  StyledBaseSection,
  StyledSectionTitleAndButton,
  StyledSectionLabelAndTitleHolder,
  StyledSectionTitle,
  StyledSectionLabel,
} from '../../../../utils/GlobalStyles';
import { useCardContext } from '../../../../contexts/CardContext/useCardContext';

function SolutionsSection() {
  const { solutions } = useCardContext();
  return (
    <StyledBaseSection>
      <StyledSectionTitleAndButton>
        <StyledSectionLabelAndTitleHolder>
          <StyledSectionTitle>Solutions</StyledSectionTitle>
          <StyledSectionLabel>Find our premium solutions</StyledSectionLabel>
        </StyledSectionLabelAndTitleHolder>
        <button>
          <i className="fa-solid fa-plus"></i>
        </button>
      </StyledSectionTitleAndButton>
      {solutions.cards.map((card) => (
        <Card key={card.id} layout="column" {...card} />
      ))}
    </StyledBaseSection>
  );
}

export default SolutionsSection;
