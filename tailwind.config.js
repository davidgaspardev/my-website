/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        blink: {
          "0%": {
            opacity: 0,
          },
          "50%": {
            opacity: 1,
          },
          "100%": {
            opacity: 0,
          }
        }
      },
      animation: {
        blink: "blink 500ms ease-in-out infinite"
      },
      colors: {
        // https://coolors.co/12bca8-10ad9b-0e9d8d-097e71-055f56-04584f-035048-00403a
        green: {
          100: '#12bca8ff',
          200: '#10ad9bff',
          300: '#0e9d8dff',
          400: '#097e71ff',
          500: '#055f56ff',
          600: '#04584Fff',
          700: '#035048ff',
          800: '#00403aff'
        }
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'league-spartan': ['League Spartan'],
        'fira-code': ['Fira Code', 'monospace'],
        'readex-pro': ['Readex Pro'],
        'hind-siliguri': ['Hind Siliguri']
      }
    },
  },
  plugins: [],
}

