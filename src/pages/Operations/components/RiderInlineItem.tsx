import React from 'react';
import { Button } from '../../../ui/components/';
import { LuAccessibility, LuUserMinus } from 'react-icons/lu';
import type { Rider } from '../../../data/types';

type RiderInlineItemProps = {
  rider: Rider;
  onRemove: (id: string) => void;
  disabled?: boolean;
  canRemoveRider?: boolean;
};

export const RiderInlineItem: React.FC<RiderInlineItemProps> = ({
  rider,
  onRemove,
  disabled = false,
  canRemoveRider = true,
}) => {
  const { id, name, mobilityRequirement } = rider;

  return (
    <Button
      variant="ghost"
      size="sm"
      isDisabled={disabled}
      onClick={() => onRemove(id)}
      ariaLabel={`Remove Rider, ${name}`}
    >
      <span className="inline-flex min-w-0 items-center gap-1 whitespace-nowrap">
        {mobilityRequirement === 'wheelchair' ? (
          <LuAccessibility className="h-4 w-4 shrink-0" aria-hidden="true" />
        ) : null}
        <span className="min-w-0 truncate">{name}</span>
        {canRemoveRider && <LuUserMinus className="h-4 w-4 shrink-0" aria-hidden="true" />}
      </span>
    </Button>
  );
};
