/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        'dana': ['dana', 'sans-serif'],
        'dana-fanum': ['dana-fanum', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      colors:{
        'primary': '#0089ff',
        'color-base': '#2e343b',
        'color-gray': '#7e7e7e'
      }
    },
  },
  plugins: [],
}
