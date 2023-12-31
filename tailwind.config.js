/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "540px",
      md: "768px",
      lg: "1024px",
      photoChangeXS: "1170px",
      xl: "1280px",
      photoChange: "1640px",
    },

    extend: {
      fontFamily: {
        roboto: ["Roboto"],
      },
      display: {
        a: "block",
      },
      height: {
        84: "21rem",
        112: "28rem",
        120: "30rem",
        128: "32rem",
        144: "36rem",
        160: "40rem",
        "10%": "10%",
      },
      width: {
        26: "6.5rem",
        "45%": "45%",
        "55%": "55%",
      },

      maxHeight: {
        160: "40rem",
      },
      minHeight: {
        80: "20rem",
        "120vh": "120vh",
      },
      colors: {
        main: "#fdfdfc",
        LightBlack: "#2a2a2a",
        CardBrown: "#C3B5AF",
        FotterDark: "#919191",
      },
      minWidth: {
        314: "314px",
      },
    },
  },
  plugins: [],
};
