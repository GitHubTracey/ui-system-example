import { cn } from '../../utils/cn';

export const labelStyles = cn('text-sm font-medium text-fg');

export const helpTextStyles = cn('text-xs text-fg-muted');

export const errorTextStyles = cn('text-xs text-danger');

export const baseFieldWrapperStyles = cn('flex flex-col gap-1');

export const baseInputStyles = cn(
  'w-full rounded-md border border-border bg-bg px-3 py-2 text-sm text-fg',
  'placeholder:text-fg-muted',
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-2 focus-visible:ring-offset-bg',
  'disabled:opacity-50 disabled:cursor-not-allowed'
);
