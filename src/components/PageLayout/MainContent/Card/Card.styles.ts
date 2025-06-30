import styled from 'styled-components';
import { Link } from 'react-router';

type CardLayout = 'default' | 'wide' | 'row-reverse' | 'column';

interface CardProps {
  $layout?: CardLayout;
}

export const StyledCard = styled.article<CardProps>`
  display: flex;
  flex-direction: ${({ $layout }) =>
    $layout === 'row-reverse'
      ? 'row-reverse'
      : $layout === 'column'
      ? 'column'
      : 'row'};

  width: ${({ $layout }) => ($layout === 'wide' ? '100%' : '100%')};

  max-width: ${({ $layout }) => ($layout === 'wide' ? '1000px' : '300px')};
  background-color: white;
  border-radius: 9px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  gap: 1rem;
  height: 350px;
`;

export const StyledCardInfoContainer = styled.div`
  padding: 5px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  gap: 5px;
`;

export const StyledCtaContainer = styled.div`
  border-top: 2px solid lightgray;
  padding: 10px;
  display: flex;
  justify-content: flex-end;
  min-height: 50px;
`;

export const StyledImg = styled.img`
  width: 100%;
  height: 120px;
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
