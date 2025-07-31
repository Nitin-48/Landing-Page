export default {

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
  plugins: [
    //  require('taos/plugin')
  ],
  safelist: [
    '!duration-[0ms]',
  '!delay-[0ms]',
  'html.js :where([class*="taos:"]:not(.taos-init))'
  ],
  
};