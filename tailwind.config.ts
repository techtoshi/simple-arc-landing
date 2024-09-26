/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'atomicals': {
          '50': '#eff6ff',
          '100': '#deecff',
          '200': '#b5dbff',
          '300': '#73bfff',
          '400': '#289eff',
          '500': '#0081fb',
          '600': '#0064d7',
          '700': '#004fae',
          '800': '#00438f',
          '900': '#043876',
          '950': '#010d1d',
        },

      },
      backgroundImage: {
        'atomicals': "url('./assets/img/atomicals-with-logo.jpg')",
        'starry-sky': "url('./assets/img/hero-section-bg.jpg')",
      },
      animation: {
        'pulse': 'pulse .8s linear infinite',
        'fadeIn': 'fadeIn .5s ease-in',
        'moveLeft': 'moveLeft .5s ease-in',
      },
      keyframes: {
        pulse: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        moveLeft: {
          '0%': { opacity: 0, transform: 'translateX(100%)' },
          '100%': { transform: 'translate(0)' },
        }
      }
    },
  },
  plugins: [],
}