import type { Preview } from '@storybook/react-vite';

// Import global CSS FIRST
import '../src/ui/tokens/theme.css';   // contains :root { --color-action-primary ... }
import '../src/index.css';          // contains Tailwind @tailwind directives

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;