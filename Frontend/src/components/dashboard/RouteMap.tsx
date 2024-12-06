import React from 'react';
import { MapPin } from 'lucide-react';
import { DEFAULT_CENTER, DEFAULT_ZOOM, MAPS_CONFIG } from '../../config/maps';

interface RouteMapProps {
  origin: { lat: number; lng: number };
  destination: { lat: number; lng: number };
  waypoints?: Array<{ lat: number; lng: number }>;
}

export const RouteMap: React.FC<RouteMapProps> = ({ origin, destination, waypoints = [] }) => {
  // If no API key is provided, show a fallback UI
  if (!MAPS_CONFIG.apiKey) {
    return (
      <div className="w-full h-96 bg-gray-100 dark:bg-gray-800 rounded-lg flex flex-col items-center justify-center p-4">
        <MapPin className="h-12 w-12 text-gray-400 dark:text-gray-600 mb-4" />
        <div className="text-center">
          <p className="text-gray-600 dark:text-gray-400 mb-2">
            Map visualization is currently unavailable
          </p>
          <div className="space-y-2 text-sm text-gray-500 dark:text-gray-500">
            <p>Origin: {origin.lat}, {origin.lng}</p>
            <p>Destination: {destination.lat}, {destination.lng}</p>
            {waypoints.length > 0 && (
              <p>Waypoints: {waypoints.length} stops</p>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-96 bg-gray-100 dark:bg-gray-800 rounded-lg">
      {/* Google Maps will be initialized here when API key is provided */}
      <iframe
        title="Route Map"
        width="100%"
        height="100%"
        frameBorder="0"
        style={{ border: 0, borderRadius: '0.5rem' }}
        src={`https://www.google.com/maps/embed/v1/directions?key=${MAPS_CONFIG.apiKey}&origin=${origin.lat},${origin.lng}&destination=${destination.lat},${destination.lng}&mode=driving`}
        allowFullScreen
      />
    </div>
  );
};