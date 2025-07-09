/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'slide-in': 'slideIn 0.5s ease-out',
      },
      backdropBlur: {
        xs: '2px',
      },
      colors: {
        gray: {
          50: '#fafafa',
          100: '#f5f5f7',
          200: '#e5e5e7',
          300: '#d2d2d7',
          400: '#a1a1a6',
          500: '#8e8e93',
          600: '#636366',
          700: '#48484a',
          800: '#363639',
          900: '#1d1d1f',
        },
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.scrollbar-hide': {
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
        },
        '.scrollbar-hide::-webkit-scrollbar': {
          'display': 'none',
        },
      }
      addUtilities(newUtilities)
    }
  ],
}
