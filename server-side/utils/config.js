require("dotenv").config();
module.exports = {
    PORT: process.env.PORT,
    PEXELS_KEY: process.env.NCI_PEXELS_KEY,
    PIXABAY_KEY: process.env.NCI_PIXABAY_KEY,
    UNSPLASH_KEY: process.env.NCI_UNSPLASH_KEY,
};
