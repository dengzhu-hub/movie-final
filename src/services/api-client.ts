import axios from "axios";

const API_KEY = import.meta.env.VITE_API_KEY;
export default axios.create({
  baseURL: "https://api.rawg.io/api/",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  params: {
    key: API_KEY,
  },
});
