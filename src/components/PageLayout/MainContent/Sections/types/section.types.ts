import { type CardProps } from '../../Card/types/Card.types';
import { type SectionCardState } from '../../../../../contexts/CardContext/CardProvider';
import type { SectionKey } from '../../../../../contexts/CardContext/CardProvider';
import type { Orientation } from '../Sections.styles';

export interface SectionProps {
  state: SectionCardState;
  onEdit: (sectionKey: SectionKey, card: CardProps) => void;
  onCreate: (sectionKey: SectionKey) => void;
  cardOverrides?: Partial<Pick<CardProps, 'size' | 'layout'>>;
  orientation?: Orientation;
}
