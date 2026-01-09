import type { Rider, Route } from '../types';

export function getAssignedRiderIds(routes: Route[]): Set<string> {
  const ids = new Set<string>();
  for (const route of routes) {
    for (const id of route.riderIds) ids.add(id);
  }
  return ids;
}

export function getUnassignedRiders(riders: Rider[], routes: Route[]): Rider[] {
  const assigned = getAssignedRiderIds(routes);
  return riders.filter((r) => !assigned.has(r.id));
}
