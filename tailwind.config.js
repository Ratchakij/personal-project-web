/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      background: "url('/public/images/popular-bg.jpg')",
    },
  },
  plugins: [require("flowbite/plugin")],
};
