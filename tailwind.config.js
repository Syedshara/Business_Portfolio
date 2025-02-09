/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        floating: "floating 6s ease-in-out infinite",
      },
      keyframes: {
        floating: {
          "0%, 100%": { transform: "translateY(0) rotateX(0deg) rotateY(0deg) " },
          "25%": { transform: "translateY(-5px) rotateX(0deg) rotateY(-10deg) " },
          "50%": { transform: "translateY(0px) rotateX(0deg) rotateY(0deg) " },
          "75%": { transform: "translateY(-5px) rotateX(0deg) rotateY(10deg) " },
        },
      },
    },
  },
  plugins: [],
};
