import React from 'react';
import { Map, Clock, Truck } from 'lucide-react';
import { RouteMap } from '../components/dashboard/RouteMap';
import { useRouteSummary } from '../hooks/useRouteSummary';
import { ParcelTable } from '../components/dashboard/ParcelTable';

export const RouteSummary: React.FC = () => {
  const { route, parcels, stats } = useRouteSummary();

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Route Summary</h1>
        <span className={`px-3 py-1 rounded-full text-sm ${
          route.status === 'active' 
            ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400'
            : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400'
        }`}>
          {route.status}
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <div className="flex items-center space-x-3">
            <Map className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Route</p>
              <p className="font-semibold text-gray-900 dark:text-white">
                {route.startHub} → {route.endHub}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <div className="flex items-center space-x-3">
            <Clock className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Estimated Time</p>
              <p className="font-semibold text-gray-900 dark:text-white">
                {route.estimatedTime} hours
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <div className="flex items-center space-x-3">
            <Truck className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Transport Mode</p>
              <p className="font-semibold text-gray-900 dark:text-white capitalize">
                {route.transport}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Assigned Parcels</h2>
          <ParcelTable parcels={parcels} />
        </div>
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Route Map</h2>
          <RouteMap
            origin={{ lat: 28.6139, lng: 77.2090 }}
            destination={{ lat: 19.0760, lng: 72.8777 }}
            waypoints={[{ lat: 23.2599, lng: 77.4126 }]}
          />
        </div>
      </div>
    </div>
  );
};