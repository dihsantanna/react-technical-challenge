/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'dark-violet': {
          900: '#170B20',
          700: '#1C1228',
          500: '#9D59FF'
        },
        'header-violet': {
          'matte': '#3A3C5A',
          700: '#4A237D'
        },
        base: '#EEEEEE'
      },
      boxShadow: {
        default: "0px 1px 4px 0px rgba(0, 0, 0, 0.10)"
      }
    },
  },
  plugins: [],
};
