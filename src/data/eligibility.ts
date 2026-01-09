import type { Rider, RiderId, Route } from './types';

export const isWheelchairRider = (r: Rider) => r.mobilityRequirement === 'wheelchair';

// Normalize IDs defensively (handles accidental numbers, whitespace, etc.)
const toKey = (id: RiderId | string | number) => String(id).trim();

export const createRiderById = (riders: Rider[]) =>
  new Map<RiderId, Rider>(riders.map((r) => [toKey(r.id) as RiderId, r]));

/*
 * if the route is not wheelchair accessible then the effective number of wheelchair spots is 0.
 */
const getWheelchairSpots = (route: Route): number => {
  if (!route.isWheelchairAccessible) return 0;
  return route.wheelchairSpots ?? 0;
};

/*
 * returns the number of used seat units and used wheelchair spots on the route
 */
export const getRouteOccupancy = (route: Route, ridersById: Map<RiderId, Rider>) => {
  let usedSeatUnits = 0;
  let usedWheelchairSpots = 0;

  for (const rawId of route.riderIds) {
    const id = toKey(rawId) as RiderId;
    const rider = ridersById.get(id);
    if (!rider) continue;

    if (isWheelchairRider(rider)) {
      usedSeatUnits += 2;
      usedWheelchairSpots += 1;
    } else {
      usedSeatUnits += 1;
    }
  }

  return { usedSeatUnits, usedWheelchairSpots };
};

/*
 * returns the remaining seat units and remaining wheelchair spots on the route
 */
export const remainingCapacity = (route: Route, ridersById: Map<RiderId, Rider>) => {
  const { usedSeatUnits, usedWheelchairSpots } = getRouteOccupancy(route, ridersById);

  const totalWheelchairSpots = getWheelchairSpots(route);

  return {
    remainingSeatUnits: Math.max(0, route.seats - usedSeatUnits),
    remainingWheelchairSpots: Math.max(0, totalWheelchairSpots - usedWheelchairSpots),
  };
};

/*
 * checks if a rider can be added to a route based on current capacity
 * (seat units + wheelchair spots) and accessibility
 */
export const canAddRiderToRoute = (
  rider: Rider,
  route: Route,
  ridersById: Map<RiderId, Rider>
): boolean => {
  const { remainingSeatUnits, remainingWheelchairSpots } = remainingCapacity(route, ridersById);

  if (isWheelchairRider(rider)) {
    if (!route.isWheelchairAccessible) return false;
    // wheelchair riders take 2 seat units and 1 wheelchair spot
    return remainingSeatUnits >= 2 && remainingWheelchairSpots >= 1;
  }

  // standard riders take 1 seat unit
  return remainingSeatUnits >= 1;
};

/*
 * Convenience helper: "does this route have any seat capacity at all?"
 * (does not check if a specific rider fits)
 */
export const hasCapacity = (route: Route, riders: Rider[]): boolean => {
  const ridersById = createRiderById(riders);
  const { remainingSeatUnits } = remainingCapacity(route, ridersById);
  return remainingSeatUnits > 0;
};
