/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        void: '#0b0c0e',
        graphite: '#1d2025',
        paper: '#f4f2ee',
        paperdim: '#e7e4dd',
        racered: '#d91e2b',
        racereddark: '#9c1119',
        signal: '#9095a0',
        signaldim: '#5c6067',
      },
      fontFamily: {
        display: ['Oswald', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
};
