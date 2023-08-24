/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      keyframes: {
        slider: {
          "0% ": { right: "-50%" },
          "100%": { right: "0" },
        },

        cancelnow: {
          "0%": { width: "0px", height: "0px" },
          "90%": { width: " 0px", height: "0px" },
          "100%": { width: "36px", height: "36px" },
        },
      },
      animation: {
        slider: "slider 1s ease-in-out",
        cancelnow: "cancelnow 1s ease-in-out",
      },
    },
  },

  plugins: [],
};
