import React from 'react';
import { Filter } from 'lucide-react';
import { ParcelFilters } from '../../types/spo';

interface ParcelFilterProps {
  onFilterChange: (filters: ParcelFilters) => void;
}

export const ParcelFilter: React.FC<ParcelFilterProps> = ({ onFilterChange }) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    onFilterChange({
      status: name === 'status' ? value : '',
      type: name === 'type' ? value : '',
      weight: name === 'weight' ? value : '',
    });
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
      <div className="flex items-center space-x-4">
        <Filter className="h-5 w-5 text-gray-500 dark:text-gray-400" />
        <select
          name="status"
          onChange={handleChange}
          className="px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600"
        >
          <option value="">All Status</option>
          <option value="pending">Pending</option>
          <option value="in_transit">In Transit</option>
          <option value="delivered">Delivered</option>
        </select>
        <select
          name="type"
          onChange={handleChange}
          className="px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600"
        >
          <option value="">All Types</option>
          <option value="document">Document</option>
          <option value="parcel">Parcel</option>
          <option value="express">Express</option>
        </select>
        <select
          name="weight"
          onChange={handleChange}
          className="px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600"
        >
          <option value="">All Weights</option>
          <option value="light">Light (1kg or less)</option>
          <option value="medium">Medium (1-5kg)</option>
          <option value="heavy">Heavy (over 5kg)</option>
        </select>
      </div>
    </div>
  );
};