import {
  StyledCard,
  StyledCardInfoContainer,
  StyledCtaContainer,
  StyledImg,
  StyledButtonsAndTitleContainer,
  CardControlButtonsHolder,
  StyledCtaButton,
} from './Card.styles';
import { type CardProps } from './types/Card.types';

function Card({
  id,
  title,
  image,
  description,
  layout = 'default',
  label,
  actionButtonName,
  onEditClick,
  onDeleteClick,
}: CardProps) {
  return (
    <StyledCard $layout={layout}>
      <StyledImg src={image} alt={title} />
      <StyledCardInfoContainer>
        <StyledButtonsAndTitleContainer>
          <h2>{title}</h2>
          <CardControlButtonsHolder>
            <button onClick={onEditClick}>
              <i className="fa-solid fa-pen"></i>
            </button>
            <button onClick={onDeleteClick}>
              <i className="fa-solid fa-trash"></i>
            </button>
          </CardControlButtonsHolder>
        </StyledButtonsAndTitleContainer>
        <p>{label}</p>

        <p>{description}</p>
      </StyledCardInfoContainer>

      <StyledCtaContainer>
        <StyledCtaButton to={`solutions/${id}`}>
          {actionButtonName}
        </StyledCtaButton>
      </StyledCtaContainer>
    </StyledCard>
  );
}

export default Card;
