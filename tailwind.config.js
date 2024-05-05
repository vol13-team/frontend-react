/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}"],
  darkmode: false,
  theme: {
    fontFamily: {
      // ja: [...defaultTheme.fontFamily.sans],
      // en: [...defaultTheme.fontFamily.sans],
    },
    extend: {
      colors: {
        // primary: "#FFA500",
        // secondary: "#FFD700",
        // tertiary: "#FF6347",
        // quaternary: "#FF4500",
        // quinary: "#FF8C00",
        // senary: "#FFA07A",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
