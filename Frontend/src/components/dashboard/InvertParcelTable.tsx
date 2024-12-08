import React, { useState } from 'react';
import { Package } from 'lucide-react'; // Use only necessary icons
import { Parcel } from '../../types';

interface ParcelTableProps {
  parcels: Parcel[];
  onAccept?: (id: string) => void;
  onReject?: (id: string) => void;
}

export const InvertParcelTable: React.FC<ParcelTableProps> = () => {
  // Sample  for parcels
  const initialParcels: Parcel[] = [
    {
      id: "ICH001",
      senderId: "S001",
      receiverId: "R001",
      weight: 3.5,
      type: "express",
      status: "pending",
      origin: "Delhi",
      destination: "Chennai",
    },
    {
      id: "ICH002",
      senderId: "S002",
      receiverId: "R002",
      weight: 5.2,
      type: "standard",
      status: "delivered",
      origin: "Mumbai",
      destination: "Bangalore",
    },
    {
      id: "ICH003",
      senderId: "S003",
      receiverId: "R003",
      weight: 2.8,
      type: "express",
      status: "pending",
      origin: "Kolkata",
      destination: "Hyderabad",
    },
    {
      id: "ICH004",
      senderId: "S004",
      receiverId: "R004",
      weight: 4.1,
      type: "standard",
      status: "delivered",
      origin: "Chennai",
      destination: "Pune",
    }
  ];

  // State to store parcels and handle updates
  const [parcels, setParcels] = useState<Parcel[]>(initialParcels);

  // Handle accept action
  const handleAccept = (id: string) => {
    setParcels((prevParcels) =>
      prevParcels.map((parcel) =>
        parcel.id === id ? { ...parcel, status: 'accepted' } : parcel
      )
    );
    console.log(`Accepted parcel with ID: ${id}`);
  };

  // Handle reject action: delete the parcel by id
  const handleReject = (id: string) => {
    // Remove the parcel with the given id
    setParcels((prevParcels) => prevParcels.filter(parcel => parcel.id !== id));
    console.log(`Rejected (deleted) parcel with ID: ${id}`);
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 dark:bg-gray-700">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                Parcel ID
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                Origin
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                Destination
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                Weight
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
            {parcels.map((parcel) => (
              <tr key={parcel.id} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                  <div className="flex items-center space-x-2">
                    <Package className="h-4 w-4 text-blue-500" />
                    <span>{parcel.id}</span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                  {parcel.origin}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                  {parcel.destination}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                  {parcel.weight} kg
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`px-2 py-1 text-xs rounded-full ${
                      parcel.status === 'delivered'
                        ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400'
                        : parcel.status === 'accepted'
                        ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400'
                        : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400'
                    }`}
                  >
                    {parcel.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                  <div className="flex space-x-2">
                    <button
                      onClick={() => handleAccept(parcel.id)}
                      className="bg-green-500 hover:bg-green-600 text-white py-1 px-3 rounded-lg"
                    >
                      Accept
                    </button>
                    <button
                      onClick={() => handleReject(parcel.id)}
                      className="bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded-lg"
                    >
                      Reject
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
