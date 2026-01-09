import * as React from 'react';
import { LuAccessibility } from 'react-icons/lu';

import type { Rider, RiderId, Route } from '../../../data/types';
import { canAddRiderToRoute, remainingCapacity } from '../../../data/eligibility';
import { getAddRiderTooltipMessage } from '../helper';

import {
  ActionCell,
  Button,
  StatusBadge,
  Table,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  type StatusTone,
} from '../../../ui/components';
import { RidersCell } from '../index';
import type { AppAction } from '../../../state/appState';

type RouteRowProps = {
  route: Route;
  ridersById: Map<RiderId, Rider>;
  assignedRiders: Rider[];
  selectedRider: Rider | null | undefined;
  selectedRiderHasWheelchair: boolean;
  getRouteTone: (route: Route) => StatusTone;
  dispatch: React.Dispatch<AppAction>;
};

export const RouteRow = React.memo(function RouteRow({
  route,
  ridersById,
  assignedRiders,
  selectedRider,
  selectedRiderHasWheelchair,
  getRouteTone,
  dispatch,
}: RouteRowProps) {
  const { remainingSeatUnits, remainingWheelchairSpots } = remainingCapacity(route, ridersById);
  const tone = getRouteTone(route);

  const isRowSelected = selectedRider != null && route.riderIds.includes(selectedRider.id);

  const shouldShowAddRider =
    !route.isComplete && selectedRider != null && !route.riderIds.includes(selectedRider.id);

  const canAddSelected =
    selectedRider != null && shouldShowAddRider
      ? canAddRiderToRoute(selectedRider, route, ridersById)
      : false;

  const showAddRiderTooltip = shouldShowAddRider && !canAddSelected;

  const addRiderButton = (
    <Button
      variant="primary"
      size="sm"
      isDisabled={!canAddSelected}
      onClick={() => {
        if (!selectedRider) return;
        dispatch({
          type: 'ROUTE_ADD_RIDER',
          payload: { routeId: route.id, riderId: selectedRider.id },
        });
      }}
    >
      Add Rider
    </Button>
  );

  return (
    <Table.Row key={route.id} isSelected={isRowSelected}>
      <Table.Cell>
        <div className="flex flex-wrap items-center gap-2">
          {route.isComplete ? <StatusBadge tone="neutral" label="complete" /> : null}
          <StatusBadge tone={tone} label={route.routeStatus ?? 'scheduled'} />
        </div>
      </Table.Cell>

      <Table.Cell>{route.name}</Table.Cell>

      <Table.Cell>{remainingSeatUnits}</Table.Cell>

      <Table.Cell>{route.isWheelchairAccessible ? <LuAccessibility /> : null}</Table.Cell>

      <Table.Cell>
        <RidersCell
          riders={assignedRiders}
          canRemoveRiders={!route.isComplete}
          onRemoveRider={(id) => {
            dispatch({
              type: 'ROUTE_REMOVE_RIDER',
              payload: { routeId: route.id, riderId: id },
            });
          }}
        />
      </Table.Cell>

      <Table.Cell>
        {route.routeStatus === 'delayed' && (route.delayMinutes ?? 0) > 0 ? (
          <StatusBadge tone={tone} label={`${route.delayMinutes} min delay`} />
        ) : null}
      </Table.Cell>

      <Table.Cell>
        <ActionCell>
          {shouldShowAddRider ? (
            showAddRiderTooltip ? (
              <Tooltip>
                <TooltipTrigger asChild>
                  {/* wrapper required for disabled button */}
                  <span className="inline-flex" tabIndex={0} aria-label="Why Add Rider is disabled">
                    {addRiderButton}
                  </span>
                </TooltipTrigger>
                <TooltipContent side="top" sideOffset={8}>
                  {getAddRiderTooltipMessage({
                    shouldShowAddRider,
                    canAddSelected,
                    selectedRiderHasWheelchair,
                    route,
                    remainingSeatUnits,
                    remainingWheelchairSpots,
                  })}
                </TooltipContent>
              </Tooltip>
            ) : (
              addRiderButton
            )
          ) : null}
        </ActionCell>
      </Table.Cell>
    </Table.Row>
  );
});
