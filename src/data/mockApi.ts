import type { Rider, Route } from './types';

const riders: Rider[] = [
  { id: '100011', name: 'Alice', mobilityRequirement: 'standard' },
  { id: '100015', name: 'Bob', mobilityRequirement: 'wheelchair' },
  { id: '100021', name: 'Charlie', mobilityRequirement: 'standard' },
  { id: '100034', name: 'Diana', mobilityRequirement: 'wheelchair' },
  { id: '100045', name: 'Ethan', mobilityRequirement: 'standard' },
  { id: '100056', name: 'Fiona', mobilityRequirement: 'standard' },
];

const routes: Route[] = [
  {
    id: 'route0',
    name: 'Route 0',
    isWheelchairAccessible: true,
    seats: 6,
    wheelchairSpots: 2,
    riderIds: ['100011', '100015'],
    routeStatus: 'on-time',
    isComplete: true,
  },
  {
    id: 'route1',
    name: 'Route 1',
    isWheelchairAccessible: true,
    seats: 4,
    wheelchairSpots: 2,
    riderIds: ['100011', '100015'],
    routeStatus: 'delayed',
    delayMinutes: 5,
    isComplete: false,
  },
  {
    id: 'route2',
    name: 'Route 2',
    isWheelchairAccessible: false,
    seats: 12,
    riderIds: ['100021'],
    routeStatus: 'delayed',
    delayMinutes: 20,
    isComplete: false,
  },
  {
    id: 'route3',
    name: 'Route 3',
    routeStatus: 'on-time',
    isWheelchairAccessible: false,
    seats: 2,
    riderIds: ['100045', '100056'],
    isComplete: false,
  },
  {
    id: 'route4',
    name: 'Route 4',
    isWheelchairAccessible: true,
    wheelchairSpots: 1,
    seats: 4,
    riderIds: [],
    routeStatus: 'scheduled',
    isComplete: false,
  },
];

/* simulate network delay */
function delay(ms = 300) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Mock API — simulates platform data coming from the backend.
 */
export const fetchRoutes = async (): Promise<Route[]> => {
  await delay(500);
  return routes;
};

export const fetchRiders = async (): Promise<Rider[]> => {
  await delay(500);
  return riders;
};
