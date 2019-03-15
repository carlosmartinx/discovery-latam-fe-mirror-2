const globalColors = require('./colors');
const globalLayout = require('./layout');

export default {
  breakpoints: globalLayout.default,
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64],
  colors: globalColors.default,
  space: [0, 8, 16, 24, 32, 40, 48],
  fonts: {
    sans: 'Fira Sans, sans-serif',
  },
};
