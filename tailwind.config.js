/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      background: "url('/public/images/popular-bg.jpg')",
      backgroundLogin: "url('/public/images/bg-login.jpg')",
      backgroundLogin: "url('/public/images/bg-login1.jpg')",
    },
  },
  plugins: [require("flowbite/plugin")],
};
