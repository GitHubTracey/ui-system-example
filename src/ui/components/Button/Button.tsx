import * as React from 'react';
import { buttonStyles } from './Button.styles';

export type ButtonVariant = 'primary' | 'secondary' | 'destructive' | 'ghost' | 'link';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends Omit<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  'onClick' | 'children' | 'type' | 'disabled'
> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  isDisabled?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
  ariaLabel?: string;
  type?: 'button' | 'submit' | 'reset';
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  {
    variant = 'primary',
    size = 'md',
    isDisabled = false,
    isLoading = false,
    onClick,
    children,
    type = 'button',
    ariaLabel,
    className,
    ...rest
  },
  ref
) {
  const disabled = isDisabled || isLoading;

  return (
    <button
      ref={ref}
      type={type}
      disabled={disabled}
      className={buttonStyles({ variant, size, className })}
      onClick={onClick}
      aria-label={ariaLabel}
      {...rest}
    >
      {children}
    </button>
  );
});
