/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "base": "#f8f9fa",
        "base-2": "#e9ecef",
        "base-3": "#dee2e6",
        "primary": "#ffb5a7",
        "success": "#52b788",
        "info": "#70a1ff",
        "secondary": "#fec89a",
        "dark-base": "#212529",
        "dark-base-2": "#343a40",
        "dark-base-3": "#495057",
        "gray": "#ced4da",
      },
      fontFamily: {
        "base": ["PT Sans", "Hind Siliguri"]
      }
    },
  },
  plugins: [],
}