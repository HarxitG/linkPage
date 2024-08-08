/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        custom: "10px 10px 0px -1px rgba(0,0,0,1)",
      }
    },
  },
  plugins: [("@tailwindcss/aspect-ratio")],
};

