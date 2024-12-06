import React from 'react';
import { MapPin } from 'lucide-react';

interface AddressFormProps {
  title: string;
  data: {
    fullName: string;
    address: string;
    pinCode: string;
    contactNumber: string;
  };
  onChange: (data: {
    fullName: string;
    address: string;
    pinCode: string;
    contactNumber: string;
  }) => void;
  onLocationClick: () => void;
}

export const AddressForm: React.FC<AddressFormProps> = ({
  title,
  data,
  onChange,
  onLocationClick,
}) => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{title}</h3>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Full Name
        </label>
        <input
          type="text"
          value={data.fullName}
          onChange={(e) => onChange({ ...data, fullName: e.target.value })}
          className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600"
          required
        />
      </div>

      <div className="relative">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Address
        </label>
        <div className="flex gap-2">
          <input
            type="text"
            value={data.address}
            onChange={(e) => onChange({ ...data, address: e.target.value })}
            className="flex-1 px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600"
            required
          />
          <button
            type="button"
            onClick={onLocationClick}
            className="px-3 py-2 bg-blue-100 text-blue-600 rounded-md hover:bg-blue-200 dark:bg-blue-900/20 dark:text-blue-400"
          >
            <MapPin className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          PIN Code
        </label>
        <input
          type="text"
          value={data.pinCode}
          onChange={(e) => onChange({ ...data, pinCode: e.target.value })}
          className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Contact Number
        </label>
        <input
          type="tel"
          value={data.contactNumber}
          onChange={(e) => onChange({ ...data, contactNumber: e.target.value })}
          className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600"
          required
        />
      </div>
    </div>
  );
};