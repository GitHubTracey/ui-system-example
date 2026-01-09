// OperationsRoutesTable.tsx
import type { Dispatch } from 'react';

import { Table, type StatusTone } from '../../ui/components/';

import type { Route, Rider } from '../../data/types';
import { RouteRow } from './components/RouteRow';
import type { AppAction } from '../../state/appState';

function getRouteTone(route: Route): StatusTone {
  if (route.routeStatus === 'cancelled') return 'negative';

  if (route.routeStatus === 'delayed') {
    if ((route.delayMinutes ?? 0) >= 11) return 'negative';
    return 'warning';
  }

  return 'positive';
}

type AppDispatch = Dispatch<AppAction>;

type OperationsRoutesTableProps = {
  routes: Route[];
  ridersById: Map<string, Rider>;
  ridersByRouteId: Map<string, Rider[]>;
  selectedRider: Rider | null;
  selectedRiderHasWheelchair: boolean;
  dispatch: AppDispatch;
};

export function OperationsRoutesTable({
  routes,
  ridersById,
  ridersByRouteId,
  selectedRider,
  selectedRiderHasWheelchair,
  dispatch,
}: OperationsRoutesTableProps) {
  return (
    <Table>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Status</Table.HeaderCell>
          <Table.HeaderCell>Route</Table.HeaderCell>
          <Table.HeaderCell>Seats Available</Table.HeaderCell>
          <Table.HeaderCell>Accessibility</Table.HeaderCell>
          <Table.HeaderCell>Riders</Table.HeaderCell>
          <Table.HeaderCell>Delay?</Table.HeaderCell>
          <Table.HeaderCell />
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {routes.map((route: Route) => (
          <RouteRow
            key={route.id}
            route={route}
            ridersById={ridersById}
            assignedRiders={ridersByRouteId.get(route.id) ?? []}
            selectedRider={selectedRider}
            selectedRiderHasWheelchair={selectedRiderHasWheelchair}
            getRouteTone={getRouteTone}
            dispatch={dispatch}
          />
        ))}
      </Table.Body>
    </Table>
  );
}
