export interface CardProps {
  id: string;
  title?: string;
  image?: string;
  description?: string;
  label?: string;
  actionButtonName?: string;
  layout?: CardLayout;
  size?: CardSize;
  onEditClick?: () => void;
  onDeleteClick?: () => void;
}

export type CardLayout = 'row' | 'row-reverse' | 'column';
export type CardSize = 'narrow' | 'wide';
