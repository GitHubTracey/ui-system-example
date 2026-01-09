// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from 'eslint-plugin-storybook';

import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';

export default [
  // Ignore build output
  {
    ignores: [
      'dist/**',
      'storybook-static/**',
      'node_modules/**',
      'postcss.config.cjs',
      'tailwind.config.*',
      '.storybook/**',
      'vite.config.*',
    ],
  }, // Base recommended configs
  js.configs.recommended,
  ...tseslint.configs.recommended, // Project-specific settings
  {
    files: ['**/*.{ts,tsx}'],
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      ...reactRefresh.configs.vite.rules,
      quotes: ['error', 'single', { avoidEscape: true }],
      'no-restricted-imports': [
        'error',
        {
          patterns: [
            {
              group: [
                '**/ui/components/Button/**',
                '**/ui/components/Table/**',
                '**/ui/components/Tooltip/**',
                '**/ui/components/StatusBadge/**',
                '**/ui/components/ActionCell/**',
              ],
              message: 'Import UI primitives from the barrel: `ui/components`.',
            },
            {
              group: [
                '@/ui/components/Button/**',
                '@/ui/components/Table/**',
                '@/ui/components/Tooltip/**',
                '@/ui/components/StatusBadge/**',
                '@/ui/components/ActionCell/**',
              ],
              message: 'Import UI primitives from the barrel: `ui/components`.',
            },
          ],
        },
      ],
    },
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
    },
  },
  ...storybook.configs['flat/recommended'],
];
