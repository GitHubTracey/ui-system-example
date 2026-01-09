import type { Route } from '../../data/types';

type GetAddRiderTooltipArgs = {
  shouldShowAddRider: boolean;
  canAddSelected: boolean;
  selectedRiderHasWheelchair: boolean;
  route: Route;
  remainingSeatUnits: number;
  remainingWheelchairSpots: number;
};

export function getAddRiderTooltipMessage({
  shouldShowAddRider,
  canAddSelected,
  selectedRiderHasWheelchair,
  route,
  remainingSeatUnits,
  remainingWheelchairSpots,
}: GetAddRiderTooltipArgs): string | null {
  if (!shouldShowAddRider || canAddSelected) return null;

  if (selectedRiderHasWheelchair) {
    if (!route.isWheelchairAccessible) {
      return 'This route is not wheelchair accessible.';
    }

    if (remainingWheelchairSpots === 0) {
      return 'No wheelchair spots remaining on this route.';
    }

    if (remainingSeatUnits < 2) {
      return 'Not enough seats available for a wheelchair rider.';
    }
  }

  return 'Not enough seats available on this route.';
}
