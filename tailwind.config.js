/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        chakra: ["Chakra Petch", "sans-serif"],
      },
      backgroundImage: {
        "carousel-1":
          "url('/public/EGS_MarvelsSpiderManRemastered_InsomniacGamesNixxesSoftware_S1_2560x1440-73702d11161b29a0b7c40a8b489b1808.jpeg')",
        "carousel-2": "url('/public/download.jpeg')",
        "carousel-3": "url('/public/Astroneer-Game-Cover.jpg')",
        "carousel-4": "url('/public/RS3-Steam-PR.jpg')",
        "carousel-5": "url('/public/The-Witcher-3.jpg')",
      },
    },
  },
  plugins: [],
};
