/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui"
import formsPlugin from '@tailwindcss/forms';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.{js,ts}",
  ],
  darkMode: 'selector',
  theme: {
    extend: {},
  },
  plugins: [
      formsPlugin,
      daisyui,
  ],
  daisyui: {
    themes: ["cupcake"],
  },
}
