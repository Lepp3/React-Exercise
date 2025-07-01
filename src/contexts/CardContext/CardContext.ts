import { createContext } from 'react';
import { type CardContextType } from './CardProvider';

export const CardContext = createContext<CardContextType | undefined>(
  undefined
);
