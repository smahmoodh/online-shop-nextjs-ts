/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/preline/dist/*.js",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        badge: "url(/assets/img/badge.svg)",
        footer: "url(/assets/img/footer-top.png)",
        "footer-app": "url(/assets/img/footer-app.png)",
        android: "url(/assets/img/android.svg)",
        ios: "url(/assets/img/apple.svg)",
        widgetIcon: "url(/assets/img/title-arrow.png)",
      },
      backgroundPosition: {
        50: "50%",
      },
      fontFamily: {
        dana: ["dana", "sans-serif"],
        "dana-fanum": ["dana-fanum", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        primary: "#0089ff",
        "color-base": "#2e343b",
        "color-gray": "#7e7e7e",
      },
    },
  },
  plugins: [require("preline/plugin")],
};
