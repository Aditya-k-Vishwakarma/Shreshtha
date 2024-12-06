import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Package, MapPin, Calculator, MessageSquare, Truck } from 'lucide-react';
import { TrackingForm } from '../components/home/TrackingForm';
import { PostageCalculator } from '../components/home/PostageCalculator';
import { ServiceRequest } from '../components/home/ServiceRequest';
import { ConfirmationModal } from '../components/home/ConfirmationModal';

export const HomePage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'track' | 'calculate' | 'service'>('track');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleProceed = () => {
    setIsModalOpen(false);
    navigate('/add-parcel');
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Welcome to E-DakConnect
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
          Your Gateway to Efficient Mail and Parcel Delivery
        </p>
        <button
          onClick={() => setIsModalOpen(true)}
          className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors shadow-lg"
        >
          <Truck className="h-5 w-5 mr-2" />
          <span>Request Doorstep Pickup</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <button
          onClick={() => setActiveTab('track')}
          className={`p-6 rounded-lg border ${
            activeTab === 'track'
              ? 'bg-blue-50 border-blue-500 dark:bg-blue-900/20'
              : 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700'
          } hover:shadow-md transition-all`}
        >
          <Package className="h-8 w-8 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Track Parcel</h3>
        </button>

        <button
          onClick={() => setActiveTab('calculate')}
          className={`p-6 rounded-lg border ${
            activeTab === 'calculate'
              ? 'bg-blue-50 border-blue-500 dark:bg-blue-900/20'
              : 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700'
          } hover:shadow-md transition-all`}
        >
          <Calculator className="h-8 w-8 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Calculate Postage</h3>
        </button>

        <button
          onClick={() => setActiveTab('service')}
          className={`p-6 rounded-lg border ${
            activeTab === 'service'
              ? 'bg-blue-50 border-blue-500 dark:bg-blue-900/20'
              : 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700'
          } hover:shadow-md transition-all`}
        >
          <MessageSquare className="h-8 w-8 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Service Request</h3>
        </button>
      </div>

      <div className="flex justify-center">
        {activeTab === 'track' && <TrackingForm />}
        {activeTab === 'calculate' && <PostageCalculator />}
        {activeTab === 'service' && <ServiceRequest />}
      </div>

      <ConfirmationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onProceed={handleProceed}
      />
    </div>
  );
};