export default {

  darkMode: 'class', // ✅ enable dark mode via a CSS class

  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif']
        
      },
      colors: {
        dark: '#0f0f1c'
      }
    }
  },
  animation: {
        spin: "spin 1s linear infinite", // <-- if not already defined
        'spin-slow': "spin 15s linear infinite",
      },
  plugins: [
    //  require('taos/plugin')
  ],
  safelist: [
    '!duration-[0ms]',
  '!delay-[0ms]',
  'html.js :where([class*="taos:"]:not(.taos-init))'
  ],
  
};