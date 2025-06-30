import styled from 'styled-components';

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

  padding: 1.5rem;
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  gap: 1rem;
  overflow: hidden;
`;
