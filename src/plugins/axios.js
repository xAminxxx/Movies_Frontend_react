import axios from "axios";
import config from "./config";

const axiosIns = axios.create({
  baseURL: import.meta.env.VITE_APP_DATABASEURL,
});

export default axiosIns;
