const {familyName} = require("tailwindcss/lib/util/dataTypes");
module.exports = {
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false,
  theme: {
    fontFamily: {
      'kaushan': ['Kaushan Script']
    },
    extend: {
      colors: {
        green: {
          DEFAULT: '#00f260',
        }
      }
    },
  },
  variants: {
    extend: {
    },
  },
  plugins: [],
}
