module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          main: '#CB3939',
          surface: '#F5D7D7',
          border: '#EEBDBD',
          hover: '#A93030',
          pressed: '#89232B',
        },
        brand: {
          red: '#CB3939',
          white: '#FFFFFF',
          grey: '#5E6061',
        },
        background: {
          DEFAULT: '#FFFFFF',
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
  ],
};
