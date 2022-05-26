// module.exports = {
//   content: ["./src/**/*.{js,jsx,ts,tsx}"],
//   // or 'media' or 'class'
//   darkMode: false,
//   theme: {
//     extend: {},
//   },
//   variants: {
//     extend: {},
//   },
//   plugins: [],
// };
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "primary-gradien": `linear-gradient(
          86.88deg,
          #7d6aff 1.38%,
          #ffb86c 64.35%,
          #fc2872 119.91%
        );`,
        "secondary-gradien": `linear-gradient(
          86.88deg, #20e3b2, #2cccff
        );`,
      },
    },
  },
  plugins: [],
};
