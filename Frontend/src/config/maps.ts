// Fallback coordinates for India when map can't be loaded
export const DEFAULT_CENTER = {
  lat: 20.5937,
  lng: 78.9629,
};

export const DEFAULT_ZOOM = 5;

export const MAPS_CONFIG = {
  apiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY || '',
};