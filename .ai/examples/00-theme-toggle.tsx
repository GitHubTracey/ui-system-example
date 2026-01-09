import * as React from 'react';
import type { ThemeName } from '../../src/setTheme';
import { getCurrentTheme, setTheme } from '../../src/setTheme';
import { Button } from '../../src/ui/components';

const themes: ThemeName[] = ['light', 'dark', 'purplegold'];

export function ThemeToggleExample() {
  const [theme, setThemeState] = React.useState<ThemeName>(() => getCurrentTheme());

  return (
    <Button
      variant="primary"
      size="sm"
      onClick={() => {
        const idx = themes.indexOf(theme);
        const next = themes[(idx + 1) % themes.length];
        setThemeState(next);
        setTheme(next);
      }}
    >
      Theme: {theme}
    </Button>
  );
}
