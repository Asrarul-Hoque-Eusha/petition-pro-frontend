import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://98.81.80.131:8000";
const CLIENT_ID = import.meta.env.VITE_API_CLIENT_ID || "petition-pro-client";
const CLIENT_SECRET = import.meta.env.VITE_API_CLIENT_SECRET || "l6J4P3WwYBoRLL4JbAWDuOebJkGdqn14";
const REALM = import.meta.env.VITE_API_REALM || "petition-pro-realm";

const apiClient = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        "accept": "application/json",
        "x-client-id": CLIENT_ID,
        "x-client-secret": CLIENT_SECRET,
        "x-realm": REALM,
        "Content-Type": "application/json",
    },
});

export interface LoginRequest {
    username: string;
    password: string;
}

export interface RegisterRequest {
    username: string;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
}

export const authAPI = {
    login: (data: LoginRequest) =>
        apiClient.post("/auth/login", data),

    register: (data: RegisterRequest) =>
        apiClient.post("/auth/register", data),
};

export default apiClient;
