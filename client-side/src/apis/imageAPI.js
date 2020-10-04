import axios from "axios";

export default axios.create({
  baseURL: process.env.NODE_ENV === "production" ? "" : `http://localhost:${process.env.NCI_BACKEND_PORT || 8000}/`,
});
