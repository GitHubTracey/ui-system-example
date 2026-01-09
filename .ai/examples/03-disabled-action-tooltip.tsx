import * as React from 'react';
import { Button, Tooltip, TooltipContent, TooltipTrigger } from '../../src/ui/components';

export function DisabledActionTooltipExample() {
  const isDisabled = true;

  const action = (
    <Button variant="primary" size="sm" isDisabled={isDisabled} onClick={() => {}}>
      Add Rider
    </Button>
  );

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        {/* Wrapper makes tooltip work for disabled button + supports keyboard focus */}
        <span className="inline-flex" tabIndex={0} aria-label="Why Add Rider is disabled">
          {action}
        </span>
      </TooltipTrigger>

      <TooltipContent side="top" sideOffset={8}>
        No wheelchair spots remaining on this route.
      </TooltipContent>
    </Tooltip>
  );
}
