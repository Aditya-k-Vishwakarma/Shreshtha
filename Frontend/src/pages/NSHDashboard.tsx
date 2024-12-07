import React, { useState } from 'react';
import { Package, Truck, Clock } from 'lucide-react';
import { StatsCard } from '../components/dashboard/StatsCard';
import { ParcelTable } from '../components/dashboard/ParcelTable';
// import { RouteMap } from '../components/dashboard/RouteMap';
import { Parcel } from '../types';

const mockParcels: Parcel[] = [
  {
    id: 'NSH001',
    senderId: 'S001',
    receiverId: 'R001',
    weight: 2.5,
    type: 'document',
    status: 'in_transit',
    origin: 'Mumbai',
    destination: 'Delhi',
  },
  {
    id: 'NSH001',
    senderId: 'S001',
    receiverId: 'R001',
    weight: 2.5,
    type: 'document',
    status: 'in_transit',
    origin: 'Mumbai',
    destination: 'Delhi',
  },
  {
    id: 'NSH001',
    senderId: 'S001',
    receiverId: 'R001',
    weight: 2.5,
    type: 'document',
    status: 'in_transit',
    origin: 'Mumbai',
    destination: 'Delhi',
  },
  {
    id: 'NSH001',
    senderId: 'S001',
    receiverId: 'R001',
    weight: 2.5,
    type: 'document',
    status: 'in_transit',
    origin: 'Mumbai',
    destination: 'Delhi',
  }
  
];

export const NSHDashboard: React.FC = () => {
  const [parcels] = useState<Parcel[]>(mockParcels);

  const handleAcceptParcel = (id: string) => {
    console.log('Accepting parcel:', id);
  };


  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white">NSH Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatsCard
          title="Received Parcels"
          value={25}
          icon={Package}
          trend={{ value: 12, isPositive: true }}
        />
        <StatsCard
          title="Active Routes"
          value={8}
          icon={Truck}
          trend={{ value: 5, isPositive: true }}
        />
        <StatsCard
          title="Average Delivery Time"
          value="2.588 days"
          icon={Clock}
          trend={{ value: 10, isPositive: false }}
        />
      </div>

      <div>
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-red">Incoming Parcels</h2>
          <ParcelTable
            parcels={parcels}
           
          />
        </div>
      
      </div>
    </div>
  );
};