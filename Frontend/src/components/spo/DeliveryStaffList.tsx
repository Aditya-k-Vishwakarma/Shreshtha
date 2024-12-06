import React from 'react';
import { User, MapPin, Package } from 'lucide-react';
import { DeliveryStaff } from '../../types';

interface DeliveryStaffListProps {
  staff: DeliveryStaff[];
}

export const DeliveryStaffList: React.FC<DeliveryStaffListProps> = ({ staff }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        {staff.map((member) => (
          <div key={member.id} className="p-4 hover:bg-gray-50 dark:hover:bg-gray-700">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="bg-blue-100 dark:bg-blue-900/20 p-2 rounded-full">
                  <User className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-900 dark:text-white">
                    {member.name}
                  </h3>
                  <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                    <MapPin className="h-4 w-4" />
                    <span>{member.area}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Package className="h-4 w-4 text-gray-400" />
                <span className="text-sm text-gray-600 dark:text-gray-300">
                  {member.assignedParcels} parcels
                </span>
                <span className={`px-2 py-1 text-xs rounded-full ${
                  member.status === 'active'
                    ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400'
                    : 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400'
                }`}>
                  {member.status}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};