/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"],
        Quicksand: ['Quicksand', "sans-serif"]
      },
      animation: {
        'fade-slide-in-from-left': 'fade-slide-in-from-left 1s ease-out forwards',
        'fade-slide-in-from-right': 'fade-slide-in-from-right 1s ease-out forwards',
        'fade-slide-in-from-bottom': 'fade-slide-in-from-bottom 1s ease-out forwards',
        'flash': 'flash 1s ease-in-out infinite alternate',
      },
      keyframes: {
        'fade-slide-in-from-left': {
          '0%': {
            opacity: '0',
            transform: 'translateX(-1rem)', // Adjust as per your design
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        'fade-slide-in-from-right': {
          '0%': {
            opacity: '0',
            transform: 'translateX(1rem)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          }
        },
        'fade-slide-in-from-bottom': {
          '0%': {
            opacity: '0',
            transform: 'translateY(1rem)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          }
        },
        'flash': {
          '0%': {
            opacity: '0'
          },
          '50%': {
            opacity: '1'
          },
          '100%': {
            opacity: '0'
          },
        }
      },
    },
  },
  plugins: [],
}