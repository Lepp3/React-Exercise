import { StyledCard } from './Card.styles';

interface CardProps {
  title: string;
  image: string;
  description: string;
  layout?: 'default' | 'wide' | 'row-reverse' | 'column';
  children?: React.ReactNode;
}

function Card({
  title,
  image,
  description,
  layout = 'default',
  children,
}: CardProps) {
  return (
    <StyledCard $layout={layout}>
      <img
        src={image}
        alt={title}
        style={{ width: 120, height: 120, objectFit: 'cover' }}
      />
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
        {children}
      </div>
    </StyledCard>
  );
}

export default Card;
