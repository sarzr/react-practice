/** @type {import('tailwindcss').Config} */
export default {
  content: ["**/*.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      black: "#263238",
      D_Grey: "#4D4D4D",
      Grey: "#717171",
      L_Grey: "#89939E",
      Grey_blue: "#ABBED1",
      Silver: "#F5F7FA",
      White: "#FFFFFF",
      Primary: "#28CB8B",
      Secondary: "#263238",
      Info: "#2194f3",
      Shade_1: "#43A046",
      Shade_2: "#388E3B",
      Shade_3: "#237D31",
      Shade_4: "#1B5E1F",
      Shade_5: "#103E13",
      Tint_1: "#66BB69",
      Tint_2: "#81C784",
      Tint_3: "#A5D6A7",
      Tint_4: "#C8E6C9",
      Tint_5: "#E8F5E9",
      Warning: "#FBC02D",
      Error: "#E53835",
      Success: "#2E7D31",
    },
    fontFamily: {
      Inter: ["Inter"],
    },
    maxWidth: {
      1400: "1400px",
    },
    extend: {
      fontSize: {
        small: "16px",
        1.75: "1.75rem",
      },
      boxShadow: {
        ComuCardShadow: "0px 1.39px 2.78px 0px #ABBED133",
        NewCardShadow: "0px 5.57px 11.14px 0px #ABBED166",
      },
    },
  },
  plugins: [],
};
