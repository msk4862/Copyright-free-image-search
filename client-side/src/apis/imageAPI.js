import axios from "axios";

export default axios.create({
  baseURL: process.env.NCI_BACKEND_IP || `http://localhost:${process.env.NCI_BACKEND_PORT || 8000}/`,
});
