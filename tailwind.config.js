/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ['./src/app/**/*.{js,jsx,ts,tsx}', './src/components/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        background: '#27272A',
        primary: {
          500: '#00CEE6',
        },
        text: {
          default: '#71717A',
          link: '#2563EB',
        },
        border: {
          default: '#3F3F46',
        },
        home: {
          card: '#3F3F46',
          ruler: '#71717A',
        },
      },
    },
  },
  plugins: [],
}
