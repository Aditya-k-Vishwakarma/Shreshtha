import { BackendService } from "./config";

const AuthService = {
    async login(email, password) {
        return await BackendService.post("/login", { email, password });
    },
    async getAllUsers() {
        return await BackendService.get("/users");
    },
}

export default AuthService;