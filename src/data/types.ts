export type MobilityRequirement = 'standard' | 'wheelchair';

export type RiderId = string;
export type Rider = {
  id: RiderId;
  name: string;
  mobilityRequirement: MobilityRequirement;
};

export type RouteStatus = 'scheduled' | 'on-time' | 'delayed' | 'cancelled';
export type RouteId = string;
export type Route = {
  id: RouteId;
  name: string;
  isWheelchairAccessible: boolean;
  riderIds: RiderId[];
  seats: number;
  wheelchairSpots?: number;
  isComplete: boolean;
  routeStatus: RouteStatus;
  /** Only meaningful when routeStatus === 'delayed' */
  delayMinutes?: number;
};
