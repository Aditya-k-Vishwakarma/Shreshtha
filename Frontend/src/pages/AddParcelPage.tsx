import React from 'react';
import { AddParcelForm } from '../components/parcel/AddParcelForm';

export const AddParcelPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Add New Parcel</h1>
      <AddParcelForm />
    </div>
  );
};