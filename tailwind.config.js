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
  theme: {
    extend: {
      keyframes: {
        backgroundColorChange: {
          '0%, 100%': { backgroundColor: '#C4DACC' }, // Start/End color
          '50%': { backgroundColor: '#9CB2A4' },      // Midway color
        },
        svgFillChange: {
          '0%, 100%': { fill: '#E2F8EA' },            // Start/End color
          '50%': { fill: '#1F3527' },                 // Midway color
        },
      },
      animation: {
        bgChange: 'backgroundColorChange 3s ease-in-out infinite',
        svgFill: 'svgFillChange 3s ease-in-out infinite',
      },
    },
  },
  plugins: []
};
