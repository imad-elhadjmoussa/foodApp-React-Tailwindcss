/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens:{
      sm:"480px",
      md:"768px",
      lg:"976px",
      xl:"1440px"
    },
    extend: {
      spacing:{
        "100vh":"100vh"
      },
      scale:{
        "scale1":"scale(1.05)"
      },
      transitionDelay:{
        "tr1":"0.25s",
      }
    },
  },
  plugins: [],
}

