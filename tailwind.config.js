/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["Inter"],
        poppins: ["Poppins", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      textColor: {
        primary: "#191919",
        link: "#299D91",
        hint: "#999DA3"
      },
      backgroundColor: {
        primary: "#299D91", 
        hint: "#999DA3"
      },
      borderColor: {
        primary: "#4B5768",
      },
    },
  },
  plugins: [],
};
