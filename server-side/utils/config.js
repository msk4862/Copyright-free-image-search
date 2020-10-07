const dotenv = require("dotenv");
dotenv.config();
module.exports = {
    BACKEND_PORT: process.env.NCI_BACKEND_PORT,
    PEXELS_KEY: process.env.NCI_PEXELS_KEY,
    PIXABAY_KEY: process.env.NCI_PIXABAY_KEY,
    UNSPLASH_KEY: process.env.NCI_UNSPLASH_KEY,
};
