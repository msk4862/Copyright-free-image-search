export const CONFIG = {
  PORT: process.env.PORT,
  HOST: process.env.HOST || 'http://localhost:3000',
  PEXELS_KEY: process.env.NCI_PEXELS_KEY,
  PIXABAY_KEY: process.env.NCI_PIXABAY_KEY,
  UNSPLASH_KEY: process.env.NCI_UNSPLASH_KEY,
  DEFAULT_PER_PAGE_IMAGE_COUNT: 60,
};
