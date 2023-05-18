/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          
          "primary": "#19D3AE",
                   
          "secondary": "#0FCFEC",
                   
          "accent": "#3A4256",
                   
          "neutral": "#15191E",
                   
          "base-100": "#F7F7F7",
                   
          "info": "#3799D2",
                   
          "success": "#1AC787",
                   
          "warning": "#E89A11",
                   
          "error": "#EA3E4F",
                   },
      },
    ],
  },
  plugins: [require("daisyui")],
};
