import * as React from 'react';
import { cn } from '../../utils/cn';
import { errorTextStyles, helpTextStyles, labelStyles } from './shared';

export type RadioOption<T extends string> = {
  label: string;
  value: T;
  description?: string;
};

export type RadioGroupFieldProps<T extends string> = {
  label: string;
  value: T;
  onValueChange: (value: T) => void;
  options: RadioOption<T>[];
  name?: string;
  description?: string;
  error?: string;
  containerClassName?: string;
};

export function RadioGroupField<T extends string>({
  label,
  value,
  onValueChange,
  options,
  name,
  description,
  error,
  containerClassName,
}: RadioGroupFieldProps<T>) {
  const autoId = React.useId();
  const groupName = name ?? `radio-${autoId}`;
  const descId = description ? `${groupName}-desc` : undefined;
  const errId = error ? `${groupName}-err` : undefined;

  return (
    <fieldset className={cn('flex flex-col gap-2', containerClassName)}>
      <legend className={labelStyles}>{label}</legend>

      {description ? (
        <div id={descId} className={helpTextStyles}>
          {description}
        </div>
      ) : null}

      <div className="flex flex-col gap-2">
        {options.map((opt) => {
          const id = `${groupName}-${opt.value}`;
          return (
            <label
              key={opt.value}
              htmlFor={id}
              className="inline-flex items-start gap-2 text-sm text-fg"
            >
              <input
                id={id}
                name={groupName}
                type="radio"
                value={opt.value}
                checked={value === opt.value}
                onChange={() => onValueChange(opt.value)}
                className={cn(
                  'mt-0.5 h-4 w-4 border border-border bg-bg',
                  'text-primary',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-2 focus-visible:ring-offset-bg'
                )}
                aria-invalid={Boolean(error) || undefined}
                aria-describedby={cn(descId, errId) || undefined}
              />
              <span className="flex flex-col">
                <span>{opt.label}</span>
                {opt.description ? (
                  <span className="text-xs text-fg-muted">{opt.description}</span>
                ) : null}
              </span>
            </label>
          );
        })}
      </div>

      {error ? (
        <div id={errId} className={errorTextStyles}>
          {error}
        </div>
      ) : null}
    </fieldset>
  );
}
