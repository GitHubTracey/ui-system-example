import React from 'react';
import { RiderInlineItem } from './RiderInlineItem';
import type { Rider } from '../../../data/types';

type RidersCellProps = {
  riders: Rider[];
  onRemoveRider: (id: string) => void;
  disabled?: boolean;
  canRemoveRiders?: boolean;
  emptyText?: string;
};

export const RidersCell: React.FC<RidersCellProps> = ({
  riders,
  onRemoveRider,
  disabled = false,
  canRemoveRiders = true,
  emptyText = '',
}) => {
  if (!riders || riders.length === 0) {
    return <span className="text-muted-foreground">{emptyText}</span>;
  }
  const sortedRiders = [...riders].sort((a, b) =>
    a.mobilityRequirement === 'wheelchair' && b.mobilityRequirement !== 'wheelchair' ? -1 : 1
  );
  return (
    <div className="flex flex-wrap items-center gap-x-1">
      {sortedRiders.map((rider) => (
        <React.Fragment key={rider.id}>
          <RiderInlineItem
            rider={rider}
            onRemove={onRemoveRider}
            disabled={disabled || !canRemoveRiders}
            canRemoveRider={canRemoveRiders}
          />
        </React.Fragment>
      ))}
    </div>
  );
};
