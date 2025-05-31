import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const API_URL = process.env.API_URL;

const axiosInstance = axios.create({
  baseURL: API_URL,
});

export default axiosInstance;
