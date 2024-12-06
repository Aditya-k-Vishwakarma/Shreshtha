import React from 'react';

interface ParcelDetailsFormProps {
  data: {
    type: string;
    weight: string;
    dimensions: {
      length: string;
      width: string;
      height: string;
    };
  };
  onChange: (data: {
    type: string;
    weight: string;
    dimensions: {
      length: string;
      width: string;
      height: string;
    };
  }) => void;
}

export const ParcelDetailsForm: React.FC<ParcelDetailsFormProps> = ({
  data,
  onChange,
}) => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Parcel Details</h3>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Parcel Type
        </label>
        <select
          value={data.type}
          onChange={(e) => onChange({ ...data, type: e.target.value })}
          className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600"
        >
          <option value="document">Document</option>
          <option value="package">Package</option>
          <option value="fragile">Fragile</option>
          <option value="perishable">Perishable</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Weight (kg)
        </label>
        <input
          type="number"
          step="0.1"
          min="0"
          value={data.weight}
          onChange={(e) => onChange({ ...data, weight: e.target.value })}
          className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Dimensions (cm)
        </label>
        <div className="grid grid-cols-3 gap-4">
          <div>
            <input
              type="number"
              min="0"
              value={data.dimensions.length}
              onChange={(e) => onChange({
                ...data,
                dimensions: { ...data.dimensions, length: e.target.value }
              })}
              className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600"
              placeholder="Length"
              required
            />
          </div>
          <div>
            <input
              type="number"
              min="0"
              value={data.dimensions.width}
              onChange={(e) => onChange({
                ...data,
                dimensions: { ...data.dimensions, width: e.target.value }
              })}
              className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600"
              placeholder="Width"
              required
            />
          </div>
          <div>
            <input
              type="number"
              min="0"
              value={data.dimensions.height}
              onChange={(e) => onChange({
                ...data,
                dimensions: { ...data.dimensions, height: e.target.value }
              })}
              className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600"
              placeholder="Height"
              required
            />
          </div>
        </div>
      </div>
    </div>
  );
};