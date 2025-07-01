import { useState, useEffect } from 'react';
import type { CardData } from '../components/PageLayout/MainContent/Card/types/Card.types';

export default function useLocalCardData(key: string, initialData: CardData[]) {
  const [cards, setCards] = useState<CardData[]>(() => {
    try {
      const persistedDataJson = localStorage.getItem(key);
      return persistedDataJson ? JSON.parse(persistedDataJson) : initialData;
    } catch {
      return initialData;
    }
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(cards));
  }, [cards, key]);

  const addCard = (card: CardData) => {
    setCards((previousState) => {
      const newState = [...previousState, card];
      localStorage.setItem(key, JSON.stringify(newState));
      console.log(key);
      return newState;
    });
  };

  const updateCard = (updatedCard: CardData) => {
    setCards((previousState) => {
      const updated = previousState.map((card) =>
        card.id === updatedCard.id ? updatedCard : card
      );
      localStorage.setItem(key, JSON.stringify(updated));
      return updated;
    });
  };

  const deleteCard = (deletedCardId: string) => {
    setCards((previousState) => {
      const updated = previousState.filter((card) => card.id !== deletedCardId);
      localStorage.setItem(key, JSON.stringify(updated));
      return updated;
    });
  };

  return { cards, addCard, updateCard, deleteCard };
}
