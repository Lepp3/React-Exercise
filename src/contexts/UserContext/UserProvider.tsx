import { type ReactNode } from 'react';
import usePersistedState from '../../hooks/usePersistedState';
import { UserContext } from './UserContext';

type UserData = {
  name?: string;
};

export type UserContextType = {
  authData: UserData;
  userLoginHandler: (data: UserData) => void;
  userLogoutHandler: () => void;
};

type UserProviderProps = {
  children: ReactNode;
};

export const UserProvider = ({ children }: UserProviderProps) => {
  const [authData, setAuth] = usePersistedState<UserData>({});

  const userLoginHandler = (data: UserData) => {
    setAuth(data);
  };

  const userLogoutHandler = () => {
    setAuth({});
  };

  return (
    <UserContext.Provider
      value={{ authData, userLoginHandler, userLogoutHandler }}
    >
      {children}
    </UserContext.Provider>
  );
};
