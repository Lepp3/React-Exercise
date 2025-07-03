import { type ReactNode } from 'react';
import useLocalCardData from '../../hooks/useLocalCardData';
import solutionsCardsInfo from '../../assets/solutionsCardsInfo.json';
import featuredCardsInfo from '../../assets/featuredCardsInfo.json';
import newsCardsInfo from '../../assets/newsCardsInfo.json';
import podcastsCardsInfo from '../../assets/podcastsCardsInfo.json';
import eventsCardsInfo from '../../assets/podcastsCardsInfo.json';
import { type CardProps } from '../../components/PageLayout/MainContent/Card/types/Card.types';
import { CardContext } from './CardContext';

type CardProviderProps = {
  children: ReactNode;
};

export type SectionKey =
  | 'news'
  | 'solutions'
  | 'events'
  | 'podcasts'
  | 'featured';

export interface SectionCardState {
  cards: CardProps[];
  addCard: (card: CardProps) => void;
  updateCard: (card: CardProps) => void;
  deleteCard: (deleteCardId: string) => void;
}

export type CardContextType = {
  solutions: SectionCardState;
  featured: SectionCardState;
  news: SectionCardState;
  events: SectionCardState;
  podcasts: SectionCardState;
};

export const CardProvider = ({ children }: CardProviderProps) => {
  const solutions = useLocalCardData('solutions', solutionsCardsInfo);
  const featured = useLocalCardData('featured', featuredCardsInfo);
  const news = useLocalCardData('news', newsCardsInfo);
  const podcasts = useLocalCardData('podcasts', podcastsCardsInfo);
  const events = useLocalCardData('events', eventsCardsInfo);

  return (
    <CardContext.Provider
      value={{ solutions, featured, news, podcasts, events }}
    >
      {children}
    </CardContext.Provider>
  );
};
