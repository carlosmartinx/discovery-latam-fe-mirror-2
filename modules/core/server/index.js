const _ = require('lodash');

// CSS styles will be imported on load and that complicates matters... ignore those bad boys!
const ignoreStyles = require('ignore-styles');

const register = ignoreStyles.default;

// We also want to ignore all image requests
// When running locally these will load from a standard import
// When running on the server, we want to load via their hashed version in the build folder
const extensions = ['.gif', '.jpeg', '.jpg', '.png', '.svg'];

// Override the default style ignorer, also modifying all image requests
// eslint-disable-next-line consistent-return
register(ignoreStyles.DEFAULT_EXTENSIONS, (module, filename) => {
  if (!extensions.find(f => filename.endsWith(f))) {
    // If we find a style
    return ignoreStyles.noOp();
  }
  if (_.some(extensions, ext => filename.endsWith(ext))) {
    // eslint-disable-next-line no-param-reassign
    module.exports = `/static/media/${filename}`;
  }
});

// Set up babel to do its thing... env for the latest toys, react-app for CRA
// Polyfill is required for Babel 7, polyfill includes a custom regenerator runtime and core-js
require('@babel/polyfill');
require('@babel/register')({
  ignore: [/\/(build|node_modules)\//],
  presets: ['@babel/preset-env', '@babel/preset-react'],
  plugins: [
    '@babel/plugin-syntax-dynamic-import',
    'dynamic-import-node',
    'react-loadable/babel',
  ],
});

require('./server');
