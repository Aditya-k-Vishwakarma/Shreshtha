import React, { useState } from 'react';
import { Send } from 'lucide-react';

interface ServiceRequestForm {
  name: string;
  contact: string;
  parcelId: string;
  message: string;
}

export const ServiceRequest: React.FC = () => {
  const [form, setForm] = useState<ServiceRequestForm>({
    name: '',
    contact: '',
    parcelId: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Service request logic will be implemented here
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-md">
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Full Name
        </label>
        <input
          type="text"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Contact Number
        </label>
        <input
          type="tel"
          value={form.contact}
          onChange={(e) => setForm({ ...form, contact: e.target.value })}
          className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Parcel ID (Optional)
        </label>
        <input
          type="text"
          value={form.parcelId}
          onChange={(e) => setForm({ ...form, parcelId: e.target.value })}
          className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Message
        </label>
        <textarea
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 h-32 resize-none"
          required
        />
      </div>
      <button
        type="submit"
        className="w-full flex items-center justify-center space-x-2 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors"
      >
        <Send size={20} />
        <span>Submit Request</span>
      </button>
    </form>
  );
};