import { cva } from 'class-variance-authority';

export const statusBadgeStyles = cva(
  ['inline-flex items-center justify-center', 'rounded-full font-medium', 'whitespace-nowrap'],
  {
    variants: {
      size: {
        sm: 'px-2 py-0.5 text-xs',
        md: 'px-2.5 py-1 text-sm',
      },
      tone: {
        positive: 'bg-positive-bg/30 text-positive-fg',
        warning: 'bg-warning-bg/30 text-warning-fg',
        neutral: 'bg-neutral-bg/30 text-neutral-fg',
        negative: 'bg-negative-bg/30 text-negative-fg',
      },
    },
    defaultVariants: {
      size: 'sm',
      tone: 'neutral',
    },
  }
);
