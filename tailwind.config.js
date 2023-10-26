/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'body': [
        '-apple-system',
        'BlinkMacSystemFont',
        'San Francisco',
        'Helvetica Neue',
        'Lucida Grande',
        'Arial',
        'sans-serif',
      ],
      'sans': [
        '-apple-system',
        'San Francisco',
        'Helvetica Neue',
        'BlinkMacSystemFont',
        'Lucida Grande',
        'Arial',
        'sans-serif',
      ]
    },
  },
}
