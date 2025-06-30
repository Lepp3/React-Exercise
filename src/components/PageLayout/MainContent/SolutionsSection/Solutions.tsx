import Card from '../Card/Card';
import { StyledBaseSection } from '../../../../utils/GlobalStyles';
import cardInfo from '../../../../assets/cardInfo.json';

function SolutionsSection() {
  return (
    <StyledBaseSection>
      {cardInfo.map((card) => (
        <Card
          key={card.id}
          layout="column"
          image={card.image}
          description={card.description}
          title={card.name}
        />
      ))}
    </StyledBaseSection>
  );
}

export default SolutionsSection;
