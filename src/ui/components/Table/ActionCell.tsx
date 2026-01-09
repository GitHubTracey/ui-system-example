import * as React from 'react';
import { cn } from '../../utils/cn';

type ActionCellProps = {
  children?: React.ReactNode;
  minWidth?: number | string;
  align?: 'start' | 'end' | 'center';
};

export function ActionCell({ children, minWidth = 96, align = 'end' }: ActionCellProps) {
  return (
    <div
      className={cn(
        'flex items-center',
        align === 'end' && 'justify-end',
        align === 'start' && 'justify-start',
        align === 'center' && 'justify-center'
      )}
      style={{
        minWidth: typeof minWidth === 'number' ? `${minWidth}px` : minWidth,
      }}
    >
      {children}
    </div>
  );
}
