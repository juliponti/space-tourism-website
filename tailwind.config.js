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
        primary: "2.7px",
        secondary: "4.72px",
      },
      backgroundImage: {
        "desktop-home": "url('/src/assets/home/background-home-desktop.jpg')",
        "desktop-destination":
          "url(/src/assets/destination/background-destination-desktop.jpg)",
        "desktop-crew": "url(/src/assets/crew/background-crew-desktop.jpg)",
        "desktop-technology":
          "url(/src/assets/technology/background-technology-desktop.jpg)",
      },
    },
  },

  plugins: [],
};
