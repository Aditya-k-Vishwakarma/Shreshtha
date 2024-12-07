import React from 'react';
import { Package, Truck, Users, Plus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { StatsCard } from '../components/dashboard/StatsCard';
// import { ParcelTable } from '../components/dashboard/ParcelTable';
import {SpoParcelTable} from './SpoParcelTable'
// import { DeliveryStaffList } from '../components/spo/DeliveryStaffList';
// import { ParcelFilter } from '../components/dashboard/ParcelFilter';
import { useSPODashboard } from '../hooks/useSPODashboard';

export const SPODashboard: React.FC = () => {
  const { parcels, staff, stats, handleParcelAccept, handleParcelReject, handleFilterChange } = useSPODashboard();
  const navigate = useNavigate();

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">SPO Dashboard</h1>
        <button
          onClick={() => navigate('/add-parcel')}
          className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
        >
          <Plus size={20} />
          <span>Add Parcel</span>
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatsCard
          title="Pending Deliveries"
          value={stats.pendingDeliveries}
          icon={Package}
          trend={{ value: stats.deliveryTrend, isPositive: true }}
        />
        <StatsCard
          title="Out for Delivery"
          value={stats.outForDelivery}
          icon={Truck}
          trend={{ value: stats.deliveryRateTrend, isPositive: true }}
        />
        <StatsCard
          title="Active Staff"
          value={stats.activeStaff}
          icon={Users}
          trend={{ value: stats.staffTrend, isPositive: true }}
        />
      </div>


      <div className="grid ">
        {/* <div className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Pending Parcels</h2>
          <SpoParcelTable/>
        </div> */}
        <SpoParcelTable/>
      </div>
    </div>
  );
};