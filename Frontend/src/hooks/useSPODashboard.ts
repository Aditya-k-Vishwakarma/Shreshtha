import { useState, useCallback } from 'react';
import { Parcel } from '../types';
import { ParcelFilters, SPODashboardData } from '../types/spo';
import { mockParcels, mockStaff, mockStats } from '../data/mockSPOData';

export const useSPODashboard = () => {
  const [parcels, setParcels] = useState<Parcel[]>(mockParcels);
  const [staff] = useState(mockStaff);
  const [stats] = useState(mockStats);

  const handleParcelAccept = useCallback((id: string) => {
    setParcels(parcels.map(parcel => 
      parcel.id === id ? { ...parcel, status: 'accepted' } : parcel
    ));
  }, [parcels]);

  const handleParcelReject = useCallback((id: string) => {
    setParcels(parcels.map(parcel => 
      parcel.id === id ? { ...parcel, status: 'rejected' } : parcel
    ));
  }, [parcels]);

  const handleFilterChange = useCallback((filters: ParcelFilters) => {
    const filteredParcels = mockParcels.filter(parcel => {
      if (filters.status && parcel.status !== filters.status) return false;
      if (filters.type && parcel.type !== filters.type) return false;
      if (filters.weight) {
        const weight = Number(parcel.weight);
        switch (filters.weight) {
          case 'light': return weight <= 1;
          case 'medium': return weight > 1 && weight <= 5;
          case 'heavy': return weight > 5;
          default: return true;
        }
      }
      return true;
    });
    setParcels(filteredParcels);
  }, []);

  return {
    parcels,
    staff,
    stats,
    handleParcelAccept,
    handleParcelReject,
    handleFilterChange,
  };
};