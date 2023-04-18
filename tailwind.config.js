/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    screens:{
      'xxs':'100px',
      'xs':'566px',
      'sm':'567px',
      'md':'960px',
      'lg':'1440px'
    },
    extend: {},
    backgroundColor:{
      "--google-grey-700-": "rgb(53, 54, 58)",
      'red':'red',
      'black':'black',
      'white':'white',
      'transparent':"transparent",
      '255':'rgba(255, 255, 255, .1)',
      "32":"rgba(32, 33, 36, 1)",
      '#202327': 'rgb(32,33,36)',
      '33':'rgb(23, 33 ,36)',
      '08':'rgba(138, 180, 248, 0.08)',
      'blue':'blue'
      
    },
    fontFamily:{
      "google":"Segoe UI, Tahoma, sans-serif"
    },
    textColor:{
      '138':'rgb(138, 180, 248)',
      'white':'white'
    }
    
  },
  plugins: [],
}

