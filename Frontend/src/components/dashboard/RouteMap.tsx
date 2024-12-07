import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix for default marker icons using CDN URLs
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png",
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
});

export const RouteMap = ({ latitude, longitude }: { latitude: number, longitude: number }) => {
  const defaultCenter = [20.5937, 78.9629]; // Default center (India)

  return (
    <div className="h-screen w-screen relative">
      <MapContainer
        center={latitude && longitude ? [latitude, longitude] : defaultCenter}
        zoom={5}
        className="h-full w-full"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />

        {latitude && longitude && (
          <Marker position={[latitude, longitude]}>
            <Popup>
              <strong>Marker</strong>
              <br />
              Latitude: {latitude}
              <br />
              Longitude: {longitude}
            </Popup>
          </Marker>
        )}
      </MapContainer>
    </div>
  );
};
