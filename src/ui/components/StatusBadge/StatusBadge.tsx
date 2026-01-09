import React from 'react';

import type { StatusTone } from './types';
import { statusBadgeStyles } from './StatusBadge.styles';


interface StatusBadgeProps {
  tone: StatusTone;
  size?: 'sm' | 'md';
  label?: string;
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({
  tone,
  size = 'md',
  label,
}: StatusBadgeProps) => {
  return (
    <span className={statusBadgeStyles({ tone, size })} >
      {label}
    </span>
  );
}
