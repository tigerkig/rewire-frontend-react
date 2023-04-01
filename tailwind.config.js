/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode : 'class' ,
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'] 
      },
      colors: {
        primary: "var(--primary)",
        primaryHover : "var(--primary-hover)" ,
        secondary: "var(--secondary)",
        secondary_light: "var(--secondary-light)",
        grays : "var(--grays)",
        light: "var(--light)",
        placeholder: "var(--placeholder)",
        pure : "var(--pure)",
        dark: "var(--dark)",
        active : "var(--active)",
        dark_primary : "var(--dark-primary)",
        dark_secondary : "var(--dark-secondary)",
        
      },
    },
  },
  plugins: [],
}
