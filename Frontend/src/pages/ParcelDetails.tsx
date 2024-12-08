// import React from 'react';
// import { useParams } from 'react-router-dom';

// export const ParcelDetails = () => {
//   const { id } = useParams();

//   // Example details for demonstration
//   const mockParcelDetails = {
//     P001: { origin: 'Mumbai', destination: 'Delhi', weight: '5 kg', sender: 'Alice', receiver: 'Bob' },
//     P002: { origin: 'Bangalore', destination: 'Chennai', weight: '3 kg', sender: 'Charlie', receiver: 'Daisy' },
//     P003: { origin: 'Kolkata', destination: 'Hyderabad', weight: '7 kg', sender: 'Eve', receiver: 'Frank' },
//     P004: { origin: 'Pune', destination: 'Lucknow', weight: '8 kg', sender: 'Grace', receiver: 'Henry' },
//   };

//   const parcel = mockParcelDetails[id];

//   if (!parcel) {
//     return <div className="text-center mt-8">Parcel not found!</div>;
//   }

//   return (
//     <div className="container mx-auto p-6">
//       <div className="bg-white shadow-md rounded-lg p-6">
//         <h1 className="text-2xl font-bold mb-4">Parcel Details (ID: {id})</h1>
//         <p><strong>Origin:</strong> {parcel.origin}</p>
//         <p><strong>Destination:</strong> {parcel.destination}</p>
//         <p><strong>Weight:</strong> {parcel.weight}</p>
//         <p><strong>Sender:</strong> {parcel.sender}</p>
//         <p><strong>Receiver:</strong> {parcel.receiver}</p>
//       </div>
//     </div>
//   );
// };


import React from 'react';
import { useParams } from 'react-router-dom';

export const ParcelDetails = () => {
  const { id } = useParams();

  // Updated mockParcelDetails with additional fields
  const mockParcelDetails = {
    P001: {
      parcelId: 'P001',
      senderName: 'Alice',
      senderPhoneNumber: '9876543210',
      senderEmail: 'alice@example.com',
      pickupAddress: '123 Street, Mumbai',
      deliveryAddress: '456 Avenue, Delhi',
      receiverName: 'Bob',
      receiverPhoneNumber: '8765432109',
      receiverPincode: '110001',
      origin: 'Mumbai',
      destination: 'Delhi',
      weight: 5,
    },
    P002: {
      parcelId: 'P002',
      senderName: 'Charlie',
      senderPhoneNumber: '9988776655',
      senderEmail: 'charlie@example.com',
      pickupAddress: '789 Lane, Bangalore',
      deliveryAddress: '123 Boulevard, Chennai',
      receiverName: 'Daisy',
      receiverPhoneNumber: '8877665544',
      receiverPincode: '600001',
      origin: 'Bangalore',
      destination: 'Chennai',
      weight: 3,
    },
    P003: {
      parcelId: 'P003',
      senderName: 'Eve',
      senderPhoneNumber: '8899776655',
      senderEmail: 'eve@example.com',
      pickupAddress: '456 Circle, Kolkata',
      deliveryAddress: '789 Square, Hyderabad',
      receiverName: 'Frank',
      receiverPhoneNumber: '7766554433',
      receiverPincode: '500001',
      origin: 'Kolkata',
      destination: 'Hyderabad',
      weight: 7,
    },
    P004: {
      parcelId: 'P004',
      senderName: 'Grace',
      senderPhoneNumber: '7766885544',
      senderEmail: 'grace@example.com',
      pickupAddress: '321 Plaza, Pune',
      deliveryAddress: '654 Road, Lucknow',
      receiverName: 'Henry',
      receiverPhoneNumber: '6655443322',
      receiverPincode: '226001',
      origin: 'Pune',
      destination: 'Lucknow',
      weight: 8,
    },
  };

  const parcel = mockParcelDetails[id];

  if (!parcel) {
    return <div className="text-center mt-8">Parcel not found!</div>;
  }

  return (
    <div className="container mx-auto p-6">
      <div className="bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-bold mb-4">Parcel Details (ID: {parcel.parcelId})</h1>
        <p><strong>Sender Name:</strong> {parcel.senderName}</p>
        <p><strong>Sender Phone:</strong> {parcel.senderPhoneNumber}</p>
        <p><strong>Sender Email:</strong> {parcel.senderEmail}</p>
        <p><strong>Pickup Address:</strong> {parcel.pickupAddress}</p>
        <p><strong>Destination:</strong> {parcel.destination}</p>
        <p><strong>Delivery Address:</strong> {parcel.deliveryAddress}</p>
        <p><strong>Receiver Name:</strong> {parcel.receiverName}</p>
        <p><strong>Receiver Phone:</strong> {parcel.receiverPhoneNumber}</p>
        <p><strong>Receiver Pincode:</strong> {parcel.receiverPincode}</p>
        <p><strong>Weight:</strong> {parcel.weight} kg</p>
      </div>
    </div>
  );
};
