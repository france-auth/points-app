/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  }, 
  theme: {
    extend: {
      width: {
        'screen-minus-3rem': 'calc(100vw - 3rem)', // Custom width
      },
      screens: {
        'xs': '320px', // Ensure the 'xs' breakpoint is still available
        'xx': '350px', // Ensure the 'xs' breakpoint is still available
        'xr': '400px', // Ensure the 'xs' breakpoint is still available
      },
    },
  },
  plugins: []
};
