const viewerX = "768px";
const viewerY = "512px";

const eyesX = "100px";
const eyesY = "170px";

const primary = "#20c997";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        primary,
      },
      borderColor: {
        primary,
      },
      width: {
        eyes: eyesX,
        viewer: viewerX,
      },
      height: {
        eyes: eyesY,
        viewer: viewerY,
      },
    },
  },
  plugins: [],
};
