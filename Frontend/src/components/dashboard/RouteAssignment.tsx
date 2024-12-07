import React, { useState } from 'react';
import { Truck, Plus } from 'lucide-react';

interface RouteAssignmentProps {
  onAssign: (routeData: {
    transportMode: string;
    estimatedTime: number;
    parcels: string[];
  }) => void;
}

export const RouteAssignment: React.FC<RouteAssignmentProps> = ({ onAssign }) => {
  const [transportMode, setTransportMode] = useState('truck');
  const [estimatedTime, setEstimatedTime] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAssign({
      transportMode,
      estimatedTime: Number(estimatedTime),
      parcels: [], // Will be populated from selected parcels
    });
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
        Assign Route
      </h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Transport Mode
          </label>
          <select
            value={transportMode}
            onChange={(e) => setTransportMode(e.target.value)}
            className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600"
          >
            <option value="truck">Truck</option>
            <option value="train">Train</option>
            <option value="air">Air Cargo</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Estimated Time (hours)
          </label>
          <input
            type="number"
            value={estimatedTime}
            onChange={(e) => setEstimatedTime(e.target.value)}
            className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600"
            min="1"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full flex  space-x-2 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors"
        >
          <Plus size={20} />
          <span>Assign Route</span>
        </button>
      </form>
    </div>
  );
};