import { Parcel, DeliveryStaff } from './index';

export interface SPOStats {
  pendingDeliveries: number;
  outForDelivery: number;
  activeStaff: number;
  deliveryTrend: number;
  deliveryRateTrend: number;
  staffTrend: number;
}

export interface ParcelFilters {
  status: string;
  type: string;
  weight: string;
}

export interface SPODashboardData {
  parcels: Parcel[];
  staff: DeliveryStaff[];
  stats: SPOStats;
}