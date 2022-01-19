module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0b0d17",
        details: "#d0d6f9",
        number: "#0B0D17",
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
        "tablet-home": "url(/src/assets/home/background-home-tablet.jpg)",
        "tablet-destination":
          "url(/src/assets/destination/background-destination-tablet.jpg)",
        "tablet-crew": "url(/src/assets/crew/background-crew-tablet.jpg)",
        "tablet-technology":
          "url(/src/assets/technology/background-technology.jpg)",
        "mobile-home": "url(/src/assets/home/background-home-mobile.jpg)",
        "mobile-destination":
          "url(/src/assets/destination/background-destination-mobile.jpg)",
        "mobile-crew": "url(/src/assets/crew/background-crew-mobile.jpg)",
        "mobile-technology":
          "url(/src/assets/technology/background-technology-mobile.jpg)",
      },
    },
  },

  plugins: [],
};
