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
import defaultImage from '../../../../assets/images/Yara_International.jpg';
import { useState } from 'react';

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
  const [imageSrc, setImageSrc] = useState(image || defaultImage);

  return (
    <StyledCard $layout={layout}>
      <StyledImg
        src={imageSrc}
        alt={title}
        onError={() => setImageSrc(defaultImage)}
      />
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
