import { cva } from 'class-variance-authority';

export const buttonStyles = cva(
  [
    'inline-flex items-center justify-center gap-1 whitespace-nowrap',
    'rounded-md font-medium',
    'transition-colors',
    'focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
    'disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50',
  ],
  {
    variants: {
      variant: {
        primary: [
          'bg-primary text-on-primary',
          'hover:bg-primary/90',
          'focus-visible:ring-primary',
          'focus-visible:ring-offset-bg',
        ],
        secondary: [
          'bg-surface-muted text-fg border border-border',
          'hover:bg-surface-muted/80',
          'focus-visible:ring-border',
          'focus-visible:ring-offset-bg',
        ],
        destructive: [
          'bg-danger text-on-danger',
          'hover:bg-danger/90',
          'focus-visible:ring-danger',
          'focus-visible:ring-offset-bg',
        ],
        ghost: [
          'bg-transparent text-fg-muted',
          'hover:bg-surface-muted/60',
          'focus-visible:ring-border',
          'focus-visible:ring-offset-bg',
        ],
        link: [
          'bg-transparent p-0 h-auto',
          'text-fg-muted underline-offset-4',
          'hover:underline hover:text-fg',
          'focus-visible:ring-0',
        ],
      },
      size: {
        sm: 'h-8 px-2 text-sm leading-none',
        md: 'h-10 px-3 text-base leading-none',
        lg: 'h-12 px-4 text-lg leading-none',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
);
