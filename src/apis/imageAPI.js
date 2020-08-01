import axios from "axios";

let BASE_URL = process.env.REACT_APP_DEVELOPMENT_API_BASE_URL;
if (process.env.REACT_APP_PRODUCTION === "PRODUCTION") {
  BASE_URL = process.env.REACT_APP_PRODUCTION_API_BASE_URL;
}

export default axios.create({
  baseURL: BASE_URL,
});
