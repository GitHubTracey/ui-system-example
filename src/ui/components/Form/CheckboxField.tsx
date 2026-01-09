import * as React from 'react';
import { cn } from '../../utils/cn';
import { errorTextStyles, helpTextStyles, labelStyles } from './shared';

export type CheckboxFieldProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> & {
  label: string;
  description?: string;
  error?: string;
  containerClassName?: string;
};

export function CheckboxField({
  id,
  label,
  description,
  error,
  className,
  containerClassName,
  ...props
}: CheckboxFieldProps) {
  const autoId = React.useId();
  const inputId = id ?? `checkbox-${autoId}`;
  const descId = description ? `${inputId}-desc` : undefined;
  const errId = error ? `${inputId}-err` : undefined;

  return (
    <div className={cn('flex flex-col gap-1', containerClassName)}>
      <label className={cn('inline-flex items-center gap-2', labelStyles)} htmlFor={inputId}>
        <input
          id={inputId}
          type="checkbox"
          className={cn(
            'h-4 w-4 rounded border border-border bg-bg',
            'text-primary',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-2 focus-visible:ring-offset-bg',
            'disabled:opacity-50 disabled:cursor-not-allowed',
            className
          )}
          aria-invalid={Boolean(error) || undefined}
          aria-describedby={cn(descId, errId) || undefined}
          {...props}
        />
        <span>{label}</span>
      </label>

      {error ? (
        <div id={errId} className={errorTextStyles}>
          {error}
        </div>
      ) : description ? (
        <div id={descId} className={helpTextStyles}>
          {description}
        </div>
      ) : null}
    </div>
  );
}
