import React, { useState } from 'react';
import { Package, Truck, BarChart3 } from 'lucide-react';
import { StatsCard } from '../components/dashboard/StatsCard';
import { ParcelTable } from '../components/dashboard/ParcelTable';
import { RouteMap } from '../components/dashboard/RouteMap';
import { RouteAssignment } from '../components/dashboard/RouteAssignment';
import { ParcelFilter } from '../components/dashboard/ParcelFilter';
import { Parcel } from '../types';

const mockParcels: Parcel[] = [
  {
    id: 'ICH001',
    senderId: 'S001',
    receiverId: 'R001',
    weight: 3.5,
    type: 'express',
    status: 'pending',
    origin: 'Delhi',
    destination: 'Chennai',
  },
  // Add more mock data as needed
];

export const ICHDashboard: React.FC = () => {
  const [parcels] = useState<Parcel[]>(mockParcels);

  const handleAcceptParcel = (id: string) => {
    console.log('Accepting parcel:', id);
  };

  const handleRejectParcel = (id: string) => {
    console.log('Rejecting parcel:', id);
  };

  const handleRouteAssign = (routeData: any) => {
    console.log('Assigning route:', routeData);
  };

  const handleFilterChange = (filters: any) => {
    console.log('Applying filters:', filters);
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white">ICH Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatsCard
          title="Total Parcels"
          value={156}
          icon={Package}
          trend={{ value: 15, isPositive: true }}
        />
        <StatsCard
          title="Active Routes"
          value={12}
          icon={Truck}
          trend={{ value: 8, isPositive: true }}
        />
        <StatsCard
          title="Efficiency Rate"
          value="94%"
          icon={BarChart3}
          trend={{ value: 3, isPositive: true }}
        />
      </div>

      <ParcelFilter onFilterChange={handleFilterChange} />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Incoming Parcels</h2>
          <ParcelTable
            parcels={parcels}
            onAccept={handleAcceptParcel}
            onReject={handleRejectParcel}
          />
        </div>
        <div className="space-y-4">
          <RouteAssignment onAssign={handleRouteAssign} />
          <RouteMap
            origin={{ lat: 28.6139, lng: 77.2090 }} // Delhi
            destination={{ lat: 13.0827, lng: 80.2707 }} // Chennai
            waypoints={[
              { lat: 17.3850, lng: 78.4867 }, // Hyderabad
            ]}
          />
        </div>
      </div>
    </div>
  );
};