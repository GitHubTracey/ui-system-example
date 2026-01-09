import * as React from 'react';
import { cn } from '../../utils/cn';
import {
  baseFieldWrapperStyles,
  baseInputStyles,
  errorTextStyles,
  helpTextStyles,
  labelStyles,
} from './shared';

export type TextFieldProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> & {
  label: string;
  description?: string;
  error?: string;
  containerClassName?: string;
};

export function TextField({
  id,
  label,
  description,
  error,
  className,
  containerClassName,
  required,
  ...props
}: TextFieldProps) {
  const autoId = React.useId();
  const inputId = id ?? `textfield-${autoId}`;
  const descId = description ? `${inputId}-desc` : undefined;
  const errId = error ? `${inputId}-err` : undefined;

  return (
    <div className={cn(baseFieldWrapperStyles, containerClassName)}>
      <label className={labelStyles} htmlFor={inputId}>
        {label}
        {required ? <span className="ml-1 text-danger">*</span> : null}
      </label>

      <input
        id={inputId}
        className={cn(
          baseInputStyles,
          error && 'border-danger focus-visible:ring-danger',
          className
        )}
        aria-invalid={Boolean(error) || undefined}
        aria-describedby={cn(descId, errId) || undefined}
        required={required}
        {...props}
      />

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
