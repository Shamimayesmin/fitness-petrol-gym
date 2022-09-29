/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#28cafc",
        
"secondary": "#82ed8d",
        
"accent": "#ffccfb",
        
"neutral": "#252B37",
        
"base-100": "#EDF0F2",
        
"info": "#A2C8F6",
        
"success": "#78DDBC",
        
"warning": "#F2B963",
        
"error": "#ED212B",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
