import { useState, useEffect } from 'react';
import type { CardProps } from '../components/PageLayout/MainContent/Card/types/Card.types';

export default function useLocalCardData(
  key: string,
  initialData: CardProps[]
) {
  const [cards, setCards] = useState<CardProps[]>(() => {
    try {
      const json = localStorage.getItem(key);
      return json ? JSON.parse(json) : initialData;
    } catch {
      return initialData;
    }
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(cards));
  }, [cards, key]);

  const addCard = (card: CardProps) => {
    setCards((prev) => [...prev, card]);
  };

  const updateCard = (card: CardProps) => {
    setCards((prev) => prev.map((c) => (c.id === card.id ? card : c)));
  };

  const deleteCard = (id: string) => {
    setCards((prev) => prev.filter((c) => c.id !== id));
  };

  return { cards, addCard, updateCard, deleteCard };
}
