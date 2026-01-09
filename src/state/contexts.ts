import * as React from 'react';
import type { AppAction, AppState } from './appState';

export const AppStateContext = React.createContext<AppState | null>(null);
export const AppDispatchContext = React.createContext<React.Dispatch<AppAction> | null>(null);
