import { useContext } from 'react';
import { UserContext } from './UserContext';
import { type UserContextType } from './UserProvider';

export const useUserContext = (): UserContextType => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useAuth must be used within UserProvider');
  }

  return context;
};
