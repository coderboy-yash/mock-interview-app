/** @type {import('tailwindcss').Config} */
import FlowbitePlugin from "flowbite/plugin";
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    fontFamily: {
      greatVibes: ["Great Vibes"],
      castro: ["Castoro Titling"],
      play: ["Playfair Display"],
    },

    extend: {},
  },
  plugins: [FlowbitePlugin],
};
