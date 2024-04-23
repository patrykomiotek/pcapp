// FIX: https://dev.to/lico/nextjs-using-tailwind-with-storybook-5aie
/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {},
  },
};

// export default config;
module.exports = config;
