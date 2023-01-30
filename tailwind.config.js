/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './config/*.json',
    './layout/*.liquid',
    './assets/*.liquid',
    './sections/*.liquid',
    './snippets/*.liquid',
    './templates/*.liquid',
    './templates/*.json',
    './templates/customers/*.liquid',
  ],
  theme: {
    extend: {
      colors:{
        bg-pewterBlue {
          --tw-bg-opacity: 1;
          background-color: rgb(146 176 178/var(--tw-bg-opacity));
      }
      }
    },
  },
  plugins: [],
}
