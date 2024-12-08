import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import { Package, Truck, BarChart3 } from "lucide-react";
import { StatsCard } from "../components/dashboard/StatsCard";
import { ParcelTable } from "../components/dashboard/ParcelTable";

import { Parcel } from "../types";

const mockParcels: Parcel[] = [
  {
    id: "ICH001",
    senderId: "S001",
    receiverId: "R001",
    weight: 3.5,
    type: "express",
    status: "pending",
    origin: "Delhi",
    destination: "Chennai",
  },
  // Add more mock data as needed
];

export const ICHDashboard: React.FC = () => {
  const [parcels] = useState<Parcel[]>(mockParcels);
  const navigate = useNavigate(); 

 

  const handleNextPage = () => {
    navigate("/InvertParcelTable", { state: { parcels } });
  };
  

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
        ICH Dashboard
      </h1>

      <div className="flex justify-end"> 
        <button
          onClick={handleNextPage}
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
        >
          Inward
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatsCard
          title="Total Parcels"
          value={156}
          icon={Package}
          trend={{ value: 15, isPositive: true }}
        />
        <StatsCard
          title="Active Routes"
          value={12}
          icon={Truck}
          trend={{ value: 8, isPositive: true }}
        />
        <StatsCard
          title="Efficiency Rate"
          value="94%"
          icon={BarChart3}
          trend={{ value: 3, isPositive: true }}
        />
      </div>

      

      <div>
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-red">
            Incoming Parcels
          </h2>
          <ParcelTable parcels={parcels} />
        </div>
      </div>
    </div>
  );
};
