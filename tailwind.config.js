/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  // content: [],
  theme: {
    // extend: {},
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "16px",
        sm: "16px",
        md: "20px",
        lg: "24px",
        xl: "40px",
        "2xl": "60px",
      },
    },
  },
  plugins: [],
}
