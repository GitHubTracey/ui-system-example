import * as React from 'react';
import { AppDispatchContext, AppStateContext } from './contexts';
import { appReducer, initialAppState } from './appState';

export function AppStateProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = React.useReducer(appReducer, initialAppState);

  return (
    <AppStateContext.Provider value={state}>
      <AppDispatchContext.Provider value={dispatch}>{children}</AppDispatchContext.Provider>
    </AppStateContext.Provider>
  );
}
