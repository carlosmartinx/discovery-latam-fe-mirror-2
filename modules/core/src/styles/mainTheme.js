const globalColors = require('./colors');
const globalLayout = require('./layout');
const globalIcons = require('./icons');

export default {
  breakpoints: globalLayout.default,
  fontSizes: [12, 14, 16, 20, 24, 28, 32, 40, 44, 48, 64, 96],
  colors: globalColors.default,
  space: [0, 8, 16, 24, 32, 40, 48],
  fonts: {
    sans: 'Fira Sans, sans-serif',
  },
  icons: globalIcons.default,
};
