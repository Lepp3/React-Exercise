import styled from 'styled-components';
import { Link } from 'react-router';
import { type CardSize, type CardLayout } from './types/Card.types';

interface StyledCardProps {
  $size?: CardSize;
}

export const StyledCard = styled.article<StyledCardProps>`
  display: flex;
  flex-direction: column;

  width: ${({ $size }) =>
    $size === 'half-wide' ? '45%' : $size === 'wide' ? '100%' : '100%'};

  max-width: ${({ $size }) => ($size === 'narrow' ? '300px' : 'none')};

  background-color: white;
  border-radius: 9px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  gap: 1rem;
  height: 350px;
`;

interface WideCardTopContainerProps {
  $layout?: CardLayout;
}

export const StyledCardTopContainer = styled.div<WideCardTopContainerProps>`
  display: flex;
  flex-direction: ${({ $layout }) =>
    $layout === 'row-reverse'
      ? 'row-reverse'
      : $layout === 'row'
      ? 'row'
      : 'column'};

  gap: 1rem;
  width: 100%;
  height: 100%;
`;

export const StyledCardInfoContainer = styled.div<{ $size?: CardSize }>`
  display: flex;
  flex-direction: column;
  flex-grow: 1;

  gap: 5px;
  padding: ${({ $size }) =>
    $size === 'half-wide' || $size === 'wide' ? '10px' : '5px'};
`;

export const StyledCtaContainer = styled.div`
  border-top: 2px solid lightgray;
  padding: 10px;
  display: flex;
  justify-content: flex-end;
  min-height: 50px;
`;

export const StyledImg = styled.img<{ $size: CardSize }>`
  width: ${({ $size }) =>
    $size === 'half-wide' || $size === 'wide' ? '35%' : '100%'};

  height: ${({ $size }) =>
    $size === 'half-wide' || $size === 'wide' ? '100%' : '120px'};
  border-radius: 9px 9px 0 0;
  object-fit: cover;
`;

export const StyledButtonsAndTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CardControlButtonsHolder = styled.div`
  display: flex;
  gap: 5px;
`;

export const StyledCtaButton = styled(Link)`
  padding: 10px;
  border-radius: 6px;
  background-color: black;
  color: white;
  cursor: pointer;
`;

export const StyledWideCardImg = styled(StyledImg)`
  width: 35%;
  height: 100%;
`;

export const StyledWideCardInfoHolder = styled(StyledCardInfoContainer)`
  padding: 10px;
`;

export const StyledWideCard = styled(StyledCard)`
  gap: 0px;
  flex-direction: column;
`;
