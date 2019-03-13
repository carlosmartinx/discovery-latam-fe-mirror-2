const globalColors = require('./colors');

export default {
  breakpoints: ['414px', '768px', '1024px', '1440px'],
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64],
  colors: globalColors,
  space: [0, 8, 16, 24, 32, 40, 48],
  fonts: {
    sans: 'Fira Sans, sans-serif',
    mono: 'Menlo, monospace',
  },
  shadows: {
    small: '0 0 4px rgba(0, 0, 0, .125)',
    large: '0 0 24px rgba(0, 0, 0, .125)',
  },
};
