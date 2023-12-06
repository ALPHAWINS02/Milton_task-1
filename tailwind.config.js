/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'soapstone': '#fffaf6',
      'mine-shaft': '#2e2e2e',
      'mine-shaft-2': '#393838',
      'octothorpe-blue': '#f1f2f4',
      'silver': '#bdbcbc',
      'boulder': '#7a7979',
      'royalblue': '#5635e6',
      'bright-sun': '#fdc844',
      'valencia': '#d3503c',
      'havelook-blue': '#53a5da',
      'olive': '#736f00',
      'spring-wood': '#f9f9f2',
      'shadly-lady': '#9d9b9c',
      'cement': '#896a5d',
      'teak': '#b2955c',
      'indigo': '#4e60ca',
      'silver-chalice': '#a5a2a3',
      'desert': '#ac501e',
      'chicago': '#5a5451',
      'biyanka': '#fcfcf4',
      'slate': '#6b6b78',
      'subsd': '#475467',
    },
    extend: {
        fontFamily: {
          'plus-jakarta-sans' : ['Plus Jakarta Sans', 'sans-serif']
        }
      
    },
  },
  plugins: [],
  darkMode: 'class',
}