import axios from "axios";

const API_BASE_URL = process.env.REACT_APP_ENV === "production"? process.env.REACT_APP_PRODUCTION_API_BASE_URL:
                    process.env.REACT_APP_DEVELOPMENT_API_BASE_URL;

export default axios.create({
    baseURL: API_BASE_URL,
});