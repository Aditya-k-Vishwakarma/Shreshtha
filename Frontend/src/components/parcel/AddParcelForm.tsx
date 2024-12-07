import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Package, MapPin } from 'lucide-react';
import { AddressForm } from './AddressForm';
import { ParcelDetailsForm } from './ParcelDetailsForm';
import { useGeolocation } from '../../hooks/useGeolocation';

interface ParcelFormData {
  sender: {
    fullName: string;
    address: string;
    pinCode: string;
    contactNumber: string;
  };
  receiver: {
    fullName: string;
    address: string;
    pinCode: string;
    contactNumber: string;
  };
  parcel: {
    type: string;
    weight: string;
    dimensions: {
      length: string;
      width: string;
      height: string;
    };
  };
}

const initialFormData: ParcelFormData = {
  sender: {
    fullName: '',
    address: '',
    pinCode: '',
    contactNumber: '',
  },
  receiver: {
    fullName: '',
    address: '',
    pinCode: '',
    contactNumber: '',
  },
  parcel: {
    type: 'document',
    weight: '',
    dimensions: {
      length: '',
      width: '',
      height: '',
    },
  },
};

export const AddParcelForm: React.FC = () => {
  const [formData, setFormData] = useState<ParcelFormData>(initialFormData);
  const [currentStep, setCurrentStep] = useState(1);
  const navigate = useNavigate();
  const { getCurrentLocation } = useGeolocation();

  const handleSenderLocationClick = async () => {
    const location = await getCurrentLocation();
    if (location) {
      setFormData(prev => ({
        ...prev,
        sender: {
          ...prev.sender,
          address: location.address,
          pinCode: location.pinCode,
        },
      }));
    }
  };

  const handleReceiverLocationClick = async () => {
    const location = await getCurrentLocation();
    if (location) {
      setFormData(prev => ({
        ...prev,
        receiver: {
          ...prev.receiver,
          address: location.address,
          pinCode: location.pinCode,
        },
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    navigate('/spo-dashboard');
  };

  const nextStep = () => setCurrentStep(prev => Math.min(prev + 1, 3));
  const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 1));

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          {[1, 2, 3].map((step) => (
            <div
              key={step}
              className={`flex items-center ${
                step < 3 ? 'flex-1' : ''
              }`}
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  step <= currentStep
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 text-gray-600'
                }`}
              >
                {step}
              </div>
              {step < 3 && (
                <div
                  className={`flex-1 h-1 mx-4 ${
                    step < currentStep
                      ? 'bg-blue-600'
                      : 'bg-gray-200'
                  }`}
                />
              )}
            </div>
          ))}
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Sender Details</span>
          <span className="text-gray-600">Parcel Details</span>
          <span className="text-gray-600">Receiver Details</span>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {currentStep === 1 && (
          <AddressForm
            title="Sender's Details"
            data={formData.  sender}
            onChange={(data) => setFormData(prev => ({ ...prev, sender: data }))}
            onLocationClick={handleSenderLocationClick}
          />
        )}

        {currentStep === 2 && (
          <ParcelDetailsForm
            data={formData.parcel}
            onChange={(data) => setFormData(prev => ({ ...prev, parcel: data }))}
          />
        )}

        {currentStep === 3 && (
          <AddressForm
            title="Receiver's Details"
            data={formData.receiver}
            onChange={(data) => setFormData(prev => ({ ...prev, receiver: data }))}
            onLocationClick={handleReceiverLocationClick}
          />
        )}

        <div className="flex justify-between pt-4">
          {currentStep > 1 && (
            <button
              type="button"
              onClick={prevStep}
              className="px-4 py-2 text-blue-600 hover:text-blue-700"
            >
              Previous
            </button>
          )}
          {currentStep < 3 ? (
            <button
              type="button"
              onClick={nextStep}
              className="ml-auto px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Next
            </button>
          ) : (
            <button
              type="submit"
              className="ml-auto px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Add Parcel
            </button>
          )}
        </div>
      </form>
    </div>
  );
};