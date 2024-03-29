/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      dropShadow: {
        '3xl': '-12px 9px 4px rgba(0, 0, 0, 0.25)',
      },
      backgroundImage: {
        'voltaic-icon':
          "url('https://imagebuckevoltaic.s3.ap-northeast-1.amazonaws.com/voltaic.png')",
      },
    },
  },
  plugins: [],
};
