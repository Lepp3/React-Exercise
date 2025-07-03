import {
  StyledBaseSection,
  StyledSectionTitleAndButton,
  StyledSectionTitle,
  StyledSectionLabelAndTitleHolder,
  StyledSectionLabel,
} from '../../../../../utils/GlobalStyles';
import Card from '../../Card/Card';
import type { CardProps } from '../../Card/types/Card.types';

interface GenericViewSectionProps {
  state: CardProps[];
}

function GenericViewSection({ state }: GenericViewSectionProps) {
  return (
    <StyledBaseSection>
      <StyledSectionTitleAndButton>
        <StyledSectionLabelAndTitleHolder>
          <StyledSectionTitle>Solutions</StyledSectionTitle>
          <StyledSectionLabel>Find our premium solutions</StyledSectionLabel>
        </StyledSectionLabelAndTitleHolder>
      </StyledSectionTitleAndButton>

      {state.map((card) => (
        <Card key={card.id} layout="column" size="narrow" {...card} />
      ))}
    </StyledBaseSection>
  );
}

export default GenericViewSection;
