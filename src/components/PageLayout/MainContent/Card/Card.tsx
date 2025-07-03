import {
  StyledCard,
  StyledCardInfoContainer,
  StyledCtaContainer,
  StyledImg,
  StyledButtonsAndTitleContainer,
  CardControlButtonsHolder,
  StyledCtaButton,
  StyledCardTopContainer,
  StyledDescription,
} from './Card.styles';
import { type CardProps } from './types/Card.types';
import defaultImage from '../../../../assets/images/Yara_International.jpg';

function Card({
  id,
  title,
  image,
  description,
  layout = 'column',
  size = 'narrow',
  label,
  actionButtonName,
  onEditClick,
  onDeleteClick,
}: CardProps) {
  return (
    <StyledCard $size={size}>
      <StyledCardTopContainer $layout={layout}>
        <StyledImg
          $size={size}
          src={image || defaultImage}
          alt={title}
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = defaultImage;
          }}
        />
        <StyledCardInfoContainer $size={size}>
          <StyledButtonsAndTitleContainer>
            <h2>{title}</h2>
            {onEditClick && onDeleteClick && (
              <CardControlButtonsHolder>
                <button onClick={onEditClick}>
                  <i className="fa-solid fa-pen"></i>
                </button>
                <button onClick={onDeleteClick}>
                  <i className="fa-solid fa-trash"></i>
                </button>
              </CardControlButtonsHolder>
            )}
          </StyledButtonsAndTitleContainer>
          <p>{label}</p>

          <StyledDescription>{description}</StyledDescription>
        </StyledCardInfoContainer>
      </StyledCardTopContainer>

      <StyledCtaContainer>
        {actionButtonName !== '' ? (
          <StyledCtaButton to={`solutions/${id}`}>
            {actionButtonName}
          </StyledCtaButton>
        ) : null}
      </StyledCtaContainer>
    </StyledCard>
  );
}

export default Card;
