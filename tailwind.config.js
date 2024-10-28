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
      colors: {
        gray: {
          1: "#666666",
          2: "#878787",
          3: "#9F9F9F",
          4: "#D1D1D1",
          5: "#F3F3F3",
          6: "#F3F3F3"
        }
      },
      textColor: {
        primary: "#191919",
        link: "#299D91",
        hint: "#999DA3"
      },
      backgroundColor: {
        main: "#F4F5F7",
        primary: "#299D91", 
        hint: "#999DA3",
        black: {
            default: "#191919"
        }
      },
      borderColor: {
        primary: "#4B5768",
      },
    },
  },
  plugins: [],
};
