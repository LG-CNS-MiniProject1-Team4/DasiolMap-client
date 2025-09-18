import axios from "axios";
import { getAccessToken } from "../utils/token";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_AUTH_URL,
  withCredentials: true,
  headers: { "Content-Type": "application/json" },
});

export const axiosPublicInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: { "Content-Type": "application/json" },
});

// accesstoken header
axiosPublicInstance.interceptors.request.use((config) => {
  const token = getAccessToken();
  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});