/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      main: `#861889`,
      gray: `#8ale86`,
      yellow: `#fcb43a`,
      black: `#212529`,
      transparent: `transparent`,
      white: `#fff`,
      gray50: `#21252910`,
      white50: `#ffffff70`,
    },
    extend: {
      textUnderlineOffset: {
        12: `12px`,
      },
    },
  },
  plugins: [],
};
