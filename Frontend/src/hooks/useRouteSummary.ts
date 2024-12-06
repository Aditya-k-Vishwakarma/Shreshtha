import { useState } from 'react';
import { Route, Parcel } from '../types';

const mockRoute: Route = {
  id: 'RT001',
  startHub: 'Delhi Hub',
  endHub: 'Mumbai Hub',
  parcels: ['PCL001', 'PCL002'],
  transport: 'truck',
  estimatedTime: 48,
  cost: 25000,
  status: 'active',
};

const mockParcels: Parcel[] = [
  {
    id: 'PCL001',
    senderId: 'S001',
    receiverId: 'R001',
    weight: 2.5,
    type: 'document',
    status: 'in_transit',
    origin: 'Delhi',
    destination: 'Mumbai',
  },
  {
    id: 'PCL002',
    senderId: 'S002',
    receiverId: 'R002',
    weight: 3.5,
    type: 'parcel',
    status: 'in_transit',
    origin: 'Delhi',
    destination: 'Mumbai',
  },
];

export const useRouteSummary = () => {
  const [route] = useState<Route>(mockRoute);
  const [parcels] = useState<Parcel[]>(mockParcels);
  const [stats] = useState({
    totalDistance: '1,400 km',
    estimatedTime: '48 hours',
    currentLocation: 'Bhopal',
  });

  return {
    route,
    parcels,
    stats,
  };
};