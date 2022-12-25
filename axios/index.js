import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://10.0.1.18:8000",
});