import Card from '../Card/Card';
import { StyledBaseSection } from '../../../../utils/GlobalStyles';
import solutionsCardsInfo from '../../../../assets/solutionsCardsInfo.json';

function SolutionsSection() {
  return (
    <StyledBaseSection>
      {solutionsCardsInfo.map((card) => (
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

export default SolutionsSection;
