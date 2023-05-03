/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/shared/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 8s linear infinite',
      },
      backgroundImage: {
        'circular-light': `repeating-radial-gradient(rgba(0,0,0,0.4) 2px, #F5F5F5 5px, #F5F5F5 100px)`,
        'circular-dark': `repeating-radial-gradient(rgba(255,255,255,0.5) 2px, #1B1B1B 8px, #1B1B1B 100px)`,

        'circular-light-lg': `repeating-radial-gradient(rgba(0,0,0,0.4) 2px, #F5F5F5 5px, #F5F5F5 80px)`,
        'circular-dark-lg': `repeating-radial-gradient(rgba(255,255,255,0.5) 2px, #1B1B1B 8px, #1B1B1B 80px)`,

        'circular-light-md': `repeating-radial-gradient(rgba(0,0,0,0.4) 2px, #F5F5F5 5px, #F5F5F5 60px)`,
        'circular-dark-md': `repeating-radial-gradient(rgba(255,255,255,0.5) 2px, #1B1B1B 6px, #1B1B1B 60px)`,

        'circular-light-sm': `repeating-radial-gradient(rgba(0,0,0,0.4) 2px, #F5F5F5 5px, #F5F5F5 40px)`,
        'circular-dark-sm': `repeating-radial-gradient(rgba(255,255,255,0.5) 2px, #1B1B1B 4px, #1B1B1B 40px)`,
      },
      colors: {
        dark: '#1B1B1B',
        light: '#F5F5F5',
        primary: '#B63E96',
        'primary-dark': '#58E6D9',
      },
    },
    screens: {
      '2xl': { max: '1535px' }, // => @media (max-width: 1535px)
      xl: { max: '1279px' }, // => @media (max-width: 1279px)
      lg: { max: '1023px' }, // => @media (max-width: 1023px)
      md: { max: '767px' }, // => @media (max-width: 767px)
      sm: { max: '639px' }, // => @media (max-width: 639px)
      xs: { max: '479px' }, // => @media (max-width: 479px)
    },
  },
  plugins: [],
}
