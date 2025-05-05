/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f7f8fc',
          100: '#eef0f8',
          200: '#d4daf0',
          300: '#bbc3e7',
          400: '#8796d5',
          500: '#5369c4',
          600: '#4a5fb0',
          700: '#3e4f93',
          800: '#314076',
          900: '#121d34', // Dark navy from business card
          950: '#0c1320',
        },
        accent: {
          yellow: {
            50: '#fffcf0',
            100: '#fff8e0',
            200: '#feefb3',
            300: '#fee580',
            400: '#fdd033',
            500: '#ffc72c', // Yellow from business card
            600: '#e6a50a',
            700: '#bf8007',
            800: '#99630f',
            900: '#7d5211',
            950: '#472c07',
          },
          orange: {
            50: '#fff8f0',
            100: '#fff0e0',
            200: '#feddb3',
            300: '#fcc580',
            400: '#fa9933',
            500: '#f7941d', // Orange from business card
            600: '#e37608',
            700: '#bc5b08',
            800: '#974710',
            900: '#7c3c11',
            950: '#461e07',
          },
        },
      },
      fontFamily: {
        sans: ['Poppins', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      },
    },
  },
  plugins: [],
};