import { useContext } from 'react';
import { CardContext } from './CardContext';
import { type CardContextType } from './CardProvider';

export const useCardContext = (): CardContextType => {
  const context = useContext(CardContext);
  if (!context) {
    throw new Error('useCards must be used within CardProvider');
  }

  return context;
};
