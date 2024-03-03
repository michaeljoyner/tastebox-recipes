/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";
import typography from "@tailwindcss/typography";
export default {
  content: [],
  theme: {
    extend: {
      fontFamily: {
        display: ["Domine", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [typography],
};
