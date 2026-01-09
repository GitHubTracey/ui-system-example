import type { Rider, Route } from '../types';

export type RiderOption = {
  value: string;
  label: string;
  isWheelchair: boolean;
};

export type RiderOptionGroup = {
  label: string;
  options: RiderOption[];
};

export function selectRiderOptionGroups(riders: Rider[], routes: Route[]): RiderOptionGroup[] {
  const assigned = new Set<string>();
  for (const route of routes) {
    for (const id of route.riderIds) assigned.add(id);
  }

  const toOption = (r: Rider): RiderOption => ({
    value: r.id,
    label: r.name,
    isWheelchair: r.mobilityRequirement === 'wheelchair',
  });

  const unassigned = riders.filter((r) => !assigned.has(r.id)).map(toOption);
  const all = riders.map(toOption);

  const groups: RiderOptionGroup[] = [];
  if (unassigned.length > 0) groups.push({ label: 'Unassigned', options: unassigned });
  groups.push({ label: 'All riders', options: all });

  return groups;
}
