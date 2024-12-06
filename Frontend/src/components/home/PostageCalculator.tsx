import React, { useState } from 'react';
import { Calculator } from 'lucide-react';

interface PostageForm {
  weight: string;
  type: string;
  origin: string;
  destination: string;
}

export const PostageCalculator: React.FC = () => {
  const [form, setForm] = useState<PostageForm>({
    weight: '',
    type: 'document',
    origin: '',
    destination: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Calculate postage logic will be implemented here
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-md">
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Package Weight (kg)
        </label>
        <input
          type="number"
          value={form.weight}
          onChange={(e) => setForm({ ...form, weight: e.target.value })}
          className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
          step="0.1"
          min="0"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Package Type
        </label>
        <select
          value={form.type}
          onChange={(e) => setForm({ ...form, type: e.target.value })}
          className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
        >
          <option value="document">Document</option>
          <option value="parcel">Parcel</option>
          <option value="express">Express</option>
        </select>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Origin PIN
          </label>
          <input
            type="text"
            value={form.origin}
            onChange={(e) => setForm({ ...form, origin: e.target.value })}
            className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Destination PIN
          </label>
          <input
            type="text"
            value={form.destination}
            onChange={(e) => setForm({ ...form, destination: e.target.value })}
            className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
      </div>
      <button
        type="submit"
        className="w-full flex items-center justify-center space-x-2 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors"
      >
        <Calculator size={20} />
        <span>Calculate Postage</span>
      </button>
    </form>
  );
};