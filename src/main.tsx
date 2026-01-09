import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './ui/tokens/theme.css';
import './index.css';
import App from './App.tsx';
import { initTheme } from './setTheme';
import { AppStateProvider } from './state/AppStateProvider';

initTheme();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppStateProvider>
      <App />
    </AppStateProvider>
  </StrictMode>
);
