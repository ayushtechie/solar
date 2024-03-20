/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      visibility: ["group-hover"],
    },
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    require('@tailwindcss/forms'),
  ],
})

