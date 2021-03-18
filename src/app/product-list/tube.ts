export interface Tube {
  droneId: number;
  time: Date;
  droneSpeed: number;
  trafficConditions: string;
  name: string;
  stationsNearby: string[];
}
