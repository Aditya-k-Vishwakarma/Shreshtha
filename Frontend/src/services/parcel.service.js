import { BackendService } from "./config";

const ParcelService = {
    
    async getAllParcels() {
        return await BackendService.get("/parcels");
    },

    
    async getParcelsByPincode(pincode) {
        return await BackendService.get(`/parcels/${pincode}`);
    },

   
    async createParcel(parcelData) {
        return await BackendService.post("/parcels", parcelData);
    },

   
    async updateParcelStatus(parcelId, status) {
        return await BackendService.patch(`/parcels/${parcelId}`, { status });
    },
};

export default ParcelService;
