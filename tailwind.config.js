/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 8s linear infinite',
      },
      backgroundImage: {
        circularLight: `repeating-radial-gradient(rgba(0,0,0,0.4) 2px, #F5F5F5 5px, #F5F5F5 100px)`,
        circularDark: `repeating-radial-gradient(rgba(255,255,255,0.5) 2px, #1B1B1B 8px, #1B1B1B 100px)`,

        circularLightLg: `repeating-radial-gradient(rgba(0,0,0,0.4) 2px, #F5F5F5 5px, #F5F5F5 80px)`,
        circularDarkLg: `repeating-radial-gradient(rgba(255,255,255,0.5) 2px, #1B1B1B 8px, #1B1B1B 80px)`,

        circularLightMd: `repeating-radial-gradient(rgba(0,0,0,0.4) 2px, #F5F5F5 5px, #F5F5F5 60px)`,
        circularDarkMd: `repeating-radial-gradient(rgba(255,255,255,0.5) 2px, #1B1B1B 6px, #1B1B1B 60px)`,

        circularLightSm: `repeating-radial-gradient(rgba(0,0,0,0.4) 2px, #F5F5F5 5px, #F5F5F5 40px)`,
        circularDarkSm: `repeating-radial-gradient(rgba(255,255,255,0.5) 2px, #1B1B1B 4px, #1B1B1B 40px)`,
      },
    },
    colors: {
      transparent: 'transparent',
      dark: '#1B1B1B',
      light: '#F5F5F5',
      primary: '#B63E96', // 240, 86, 199
      primaryDark: '#58E6D9', // 80, 230, 217
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
