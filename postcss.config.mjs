/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    // Optimize CSS for production
    ...(process.env.NODE_ENV === "production" ? { cssnano: {} } : {}),
  },
};

export default config;
