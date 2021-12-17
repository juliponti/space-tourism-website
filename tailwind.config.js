module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0b0d17",
        details: "#d0d6f9",
      },
      fontFamily: {
        BarlowCo: "Barlow Condensed",
        Barlow: "Barlow",
        Belle: "Bellefair",
      },
      letterSpacing: {
        navbar: "2.7px",
        home: "4.72px",


      },
      backgroundImage: {
        'desktop-home': "url('/src/assets/home/background-home-desktop.jpg')",
        },
      },
    },

  plugins: [],
};
