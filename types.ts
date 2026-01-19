
export interface Activity {
  id: string;
  time: string;
  location: string;
  description?: string;
  category: 'food' | 'view' | 'activity' | 'travel';
  isAlternative?: boolean;
  durationToNext?: string; // Estimated driving time to the next stop
  coordinates?: { lat: number; lng: number };
}

export enum TripStatus {
  PLANNING = 'PLANNING',
  ACTIVE = 'ACTIVE',
  COMPLETED = 'COMPLETED'
}
