import { BackendService } from "./config";

const ParcelService = {
    
    async getAllParcels() {
        return await BackendService.get("/parcels");
    },

    
    async getParcelsByPincode(pincode: string) {
        return await BackendService.get(`/parcels/${pincode}`);
    },

   
    async createParcel(parcelData: string) {
        return await BackendService.post("/parcels", parcelData);
    },

   
    async updateParcelStatus(parcelId: string, status: string): Promise<any> {
        return await BackendService.patch(`/parcels/${parcelId}`, { status });
    },
};

export default ParcelService;
