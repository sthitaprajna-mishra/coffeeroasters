/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkCyan: "hsl(179, 81%, 29%)",
        darkGreyBlue: "hsl(215, 19%, 25%)",
        paleOrange: "hsl(25, 94%, 86%)",
        lightCream: "	hsl(215, 5%, 54%)",
        grey: "",
      },
    },
  },
  plugins: [],
};
