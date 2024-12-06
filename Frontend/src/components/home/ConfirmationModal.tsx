import React from 'react';
import { Package, X } from 'lucide-react';

interface ConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onProceed: () => void;
}

export const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
  isOpen,
  onClose,
  onProceed,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white dark:bg-gray-800 rounded-lg max-w-md w-full p-6 relative">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
        >
          <X size={20} />
        </button>
        
        <div className="flex items-center justify-center mb-6">
          <div className="bg-blue-100 dark:bg-blue-900/20 p-3 rounded-full">
            <Package className="h-8 w-8 text-blue-600 dark:text-blue-400" />
          </div>
        </div>

        <h3 className="text-xl font-semibold text-gray-900 dark:text-white text-center mb-4">
          Doorstep Pickup Service
        </h3>

        <div className="space-y-4 mb-6 text-gray-600 dark:text-gray-300">
          <p>
            Our Doorstep Pickup service offers convenient parcel collection right from your location.
          </p>
          
          <div className="space-y-2">
            <h4 className="font-medium text-gray-900 dark:text-white">Benefits:</h4>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>No need to visit post office</li>
              <li>Flexible pickup scheduling</li>
              <li>Safe and secure handling</li>
              <li>Real-time tracking</li>
            </ul>
          </div>

          <div className="space-y-2">
            <h4 className="font-medium text-gray-900 dark:text-white">Service Details:</h4>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>Available Monday to Saturday</li>
              <li>Pickup hours: 9 AM to 6 PM</li>
              <li>Service charge: ₹50 per pickup</li>
            </ul>
          </div>
        </div>

        <div className="flex justify-end space-x-3">
          <button
            onClick={onClose}
            className="px-4 py-2 text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white"
          >
            Cancel
          </button>
          <button
            onClick={onProceed}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Proceed to Book
          </button>
        </div>
      </div>
    </div>
  );
};