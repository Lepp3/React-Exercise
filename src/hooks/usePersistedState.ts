import { useState } from 'react';

export default function usePersistedState<T>(
  initialState: T
): [T, (data: T) => void] {
  const [state, setState] = useState(() => {
    const persistedStateJson = localStorage.getItem('auth');
    if (!persistedStateJson) {
      return initialState;
    }

    const persistedState = JSON.parse(persistedStateJson);

    return persistedState;
  });

  const setPersistedState = (data: T) => {
    const persistedData = JSON.stringify(data);
    localStorage.setItem('auth', persistedData);

    setState(data);
  };

  return [state, setPersistedState];
}
