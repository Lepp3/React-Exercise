import {
  StyledCard,
  StyledCardInfoContainer,
  StyledCtaContainer,
  StyledImg,
  StyledButtonsAndTitleContainer,
  CardControlButtonsHolder,
  StyledCtaButton,
  StyledWideCardImg,
  StyledWideCardInfoHolder,
  StyledWideCardTopContainer,
  StyledWideCard,
} from './Card.styles';
import { type CardProps } from './types/Card.types';
import defaultImage from '../../../../assets/images/Yara_International.jpg';
import { useState } from 'react';

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
  const [imageSrc, setImageSrc] = useState(image || defaultImage);
  const isWide = size === 'wide';

  return isWide ? (
    <StyledWideCard $size={size}>
      <StyledWideCardTopContainer $layout={layout}>
        <StyledWideCardImg
          src={imageSrc}
          alt={title}
          onError={() => setImageSrc(defaultImage)}
        />
        <StyledWideCardInfoHolder>
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
        </StyledWideCardInfoHolder>
      </StyledWideCardTopContainer>
      <StyledCtaContainer>
        {actionButtonName !== '' ? (
          <StyledCtaButton to={`solutions/${id}`}>
            {actionButtonName}
          </StyledCtaButton>
        ) : null}
      </StyledCtaContainer>
    </StyledWideCard>
  ) : (
    <StyledCard $layout={layout} $size={size}>
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
