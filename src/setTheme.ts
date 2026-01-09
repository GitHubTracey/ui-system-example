export type ThemeName = 'light' | 'dark' | 'purplegold';

export function setTheme(theme: ThemeName) {
  document.documentElement.dataset.theme = theme;
  localStorage.setItem('theme', theme);
}

export function getCurrentTheme(): ThemeName {
  const fromDataset = document.documentElement.dataset.theme as ThemeName | undefined;
  if (fromDataset) return fromDataset;

  const saved = localStorage.getItem('theme') as ThemeName | null;
  return saved ?? 'light';
}

export function initTheme() {
  const saved = localStorage.getItem('theme') as ThemeName | null;
  const prefersDark = window.matchMedia?.('(prefers-color-scheme: dark)').matches;
  const theme: ThemeName = saved ?? (prefersDark ? 'dark' : 'light');
  document.documentElement.dataset.theme = theme;
}
