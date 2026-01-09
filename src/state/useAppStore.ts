import * as React from 'react';
import { AppDispatchContext, AppStateContext } from './contexts';
import type { AppAction, AppState } from './appState';

export function useAppState(): AppState {
  const ctx = React.useContext(AppStateContext);
  if (!ctx) throw new Error('useAppState must be used within <AppStateProvider />');
  return ctx;
}

export function useAppDispatch(): React.Dispatch<AppAction> {
  const ctx = React.useContext(AppDispatchContext);
  if (!ctx) throw new Error('useAppDispatch must be used within <AppStateProvider />');
  return ctx;
}

export function useAppStore(): [AppState, React.Dispatch<AppAction>] {
  return [useAppState(), useAppDispatch()];
}
