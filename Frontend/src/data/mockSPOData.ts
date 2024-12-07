import { Parcel, DeliveryStaff } from '../types';
import { SPOStats } from '../types/spo';

export const mockStaff: DeliveryStaff[] = [
  {
    id: 'DS001',
    name: 'Rohit Choukiker',
    area: 'North Zone',
    status: 'active',
    assignedParcels: 5,
  },
  {
    id: 'DS002',
    name: 'Jane Smith',
    area: 'South Zone',
    status: 'active',
    assignedParcels: 3,
  },
  {
    id: 'DS003',
    name: 'Mike Johnson',
    area: 'East Zone',
    status: 'inactive',
    assignedParcels: 0,
  },
];

export const mockParcels: Parcel[] = [
  {
    id: 'SP',
    senderId: 'S33001',
    receiverId: 'R001',
    weight: 1.5,
    type: 'document',
    status: 'pending',
    origin: 'Local Hub',
    destination: 'North Zone',
  },
];

export const mockStats: SPOStats = {
  pendingDeliveries: 15,
  outForDelivery: 8,
  activeStaff: 5,
  deliveryTrend: 12,
  deliveryRateTrend: 8,
  staffTrend: 2,
};