export type CardData = {
  id: string;
  title: string;
  image: string;
  label: string;
  description: string;
  actionButtonName: string;
  layout?: 'default' | 'wide' | 'row-reverse' | 'column';
};

export interface CardProps extends CardData {
  onEditClick?: () => void;
  onDeleteClick?: () => void;
}
