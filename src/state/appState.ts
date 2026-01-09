import type { Rider, RiderId, Route, RouteId } from '../data/types';

export type AppState = {
  riders: Rider[];
  selectedRiderId: RiderId | null;
  routes: Route[];
};

export const initialAppState: AppState = {
  riders: [],
  selectedRiderId: null,
  routes: [],
};

export type AppAction =
  | { type: 'RIDER_ADD'; payload: { rider: Rider; autoSelect?: boolean } }
  | { type: 'RIDERS_SET'; payload: { riders: Rider[] } }
  | { type: 'RIDER_SELECT'; payload: { riderId: RiderId | null } }
  | { type: 'ROUTES_SET'; payload: { routes: Route[] } }
  | {
      type: 'ROUTE_UPDATE_BY_ID';
      payload: { id: RouteId; patch: Partial<Route> };
    }
  | {
      type: 'ROUTE_ADD_RIDER';
      payload: { routeId: RouteId; riderId: RiderId };
    }
  | {
      type: 'ROUTE_REMOVE_RIDER';
      payload: { routeId: RouteId; riderId: RiderId };
    };

function upsertRider(riders: Rider[], rider: Rider): Rider[] {
  const index = riders.findIndex((r) => r.id === rider.id);
  if (index === -1) {
    return [rider, ...riders];
  }

  const next = riders.slice();
  next[index] = rider;
  return next;
}

function updateRouteById(routes: Route[], id: RouteId, patch: Partial<Route>): Route[] {
  const index = routes.findIndex((r) => r.id === id);
  if (index === -1) return routes;

  const next = routes.slice();
  next[index] = { ...next[index], ...patch };
  return next;
}

function removeRiderFromRoute(routes: Route[], routeId: RouteId, riderId: RiderId): Route[] {
  const index = routes.findIndex((r) => r.id === routeId);
  if (index === -1) return routes;

  const route = routes[index];
  const nextRiderIds = route.riderIds.filter((id) => id !== riderId);

  const next = routes.slice();
  next[index] = { ...route, riderIds: nextRiderIds };
  return next;
}

export function appReducer(state: AppState, action: AppAction): AppState {
  switch (action.type) {
    case 'RIDER_ADD': {
      const { rider, autoSelect = false } = action.payload;
      return {
        ...state,
        riders: upsertRider(state.riders, rider),
        selectedRiderId: autoSelect ? rider.id : state.selectedRiderId,
      };
    }

    case 'RIDERS_SET': {
      const { riders } = action.payload;

      return {
        ...state,
        riders,
        selectedRiderId: null,
      };
    }

    case 'RIDER_SELECT': {
      return {
        ...state,
        selectedRiderId: action.payload.riderId,
      };
    }

    case 'ROUTES_SET': {
      return {
        ...state,
        routes: action.payload.routes,
      };
    }

    case 'ROUTE_UPDATE_BY_ID': {
      const { id, patch } = action.payload;
      return {
        ...state,
        routes: updateRouteById(state.routes, id, patch),
      };
    }

    case 'ROUTE_ADD_RIDER': {
      const { routeId, riderId } = action.payload;

      return {
        ...state,
        routes: state.routes.map((route) => {
          if (route.id !== routeId) return route;
          if (route.riderIds.includes(riderId)) return route;

          return { ...route, riderIds: [...route.riderIds, riderId] };
        }),
      };
    }

    case 'ROUTE_REMOVE_RIDER': {
      const { routeId, riderId } = action.payload;
      return {
        ...state,
        routes: removeRiderFromRoute(state.routes, routeId, riderId),
      };
    }

    default:
      return state;
  }
}
