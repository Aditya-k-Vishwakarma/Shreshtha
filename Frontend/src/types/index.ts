export interface User {
  email: string;
  role: 'NSH' | 'ICH' | 'SPO' | 'USER';
}

export interface Parcel {
  id: string;
  senderId: string;
  receiverId: string;
  weight: number;
  type: string;
  status: string;
  origin: string;
  destination: string;
  currentLocation?: string;
}

export interface Route {
  id: string;
  startHub: string;
  endHub: string;
  parcels: string[];
  transport: string;
  estimatedTime: number;
  cost: number;
  status: string;
}

export interface DeliveryStaff {
  id: string;
  name: string;
  area: string;
  status: 'active' | 'inactive';
  assignedParcels: number;
}