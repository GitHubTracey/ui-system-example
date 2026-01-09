import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: 'rgb(var(--color-bg) / <alpha-value>)',
        surface: 'rgb(var(--color-surface) / <alpha-value>)',
        'surface-muted': 'rgb(var(--color-surface-muted) / <alpha-value>)',

        fg: 'rgb(var(--color-fg) / <alpha-value>)',
        'fg-inverse': 'rgb(var(--color-fg-inverse) / <alpha-value>)',
        'fg-muted': 'rgb(var(--color-fg-muted) / <alpha-value>)',

        border: 'rgb(var(--color-border) / <alpha-value>)',
        'border-surface': 'rgb(var(--color-border-surface) / <alpha-value>)',

        primary: 'rgb(var(--color-primary) / <alpha-value>)',
        'on-primary': 'rgb(var(--color-on-primary) / <alpha-value>)',

        danger: 'rgb(var(--color-danger) / <alpha-value>)',
        'on-danger': 'rgb(var(--color-on-danger) / <alpha-value>)',

        focus: 'rgb(var(--color-focus) / <alpha-value>)',

        tooltip: {
          bg: 'rgb(var(--color-tooltip-bg))',
          fg: 'rgb(var(--color-tooltip-fg))',
          border: 'rgb(var(--color-tooltip-border))',
        },

        /* status colors */
        'positive-bg': 'rgb(var(--color-positive-bg) / <alpha-value>)',
        'positive-fg': 'rgb(var(--color-positive-fg) / <alpha-value>)',
        'warning-bg': 'rgb(var(--color-warning-bg) / <alpha-value>)',
        'warning-fg': 'rgb(var(--color-warning-fg) / <alpha-value>)',
        'neutral-bg': 'rgb(var(--color-neutral-bg) / <alpha-value>)',
        'neutral-fg': 'rgb(var(--color-neutral-fg) / <alpha-value>)',
        'negative-bg': 'rgb(var(--color-negative-bg) / <alpha-value>)',
        'negative-fg': 'rgb(var(--color-negative-fg) / <alpha-value>)',
      },
    },
  },
  plugins: [],
} satisfies Config;
