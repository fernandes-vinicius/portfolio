/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/shared/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    screens: {
      '2xl': { max: '1535px' }, // => @media (max-width: 1535px)
      xl: { max: '1279px' }, // => @media (max-width: 1279px)
      lg: { max: '1023px' }, // => @media (max-width: 1023px)
      md: { max: '767px' }, // => @media (max-width: 767px)
      sm: { max: '639px' }, // => @media (max-width: 639px)
      xs: { max: '479px' }, // => @media (max-width: 479px)
    },
    extend: {
      colors: {
        dark: '#1B1B1B',
        light: '#F5F5F5',
        primary: '#B63E96',
        'primary-dark': '#58E6D9',
      },
    },
  },
  plugins: [],
}
