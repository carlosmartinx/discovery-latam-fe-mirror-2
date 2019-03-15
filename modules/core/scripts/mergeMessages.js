/* eslint-disable */
const fs = require('fs');
const path = require('path');
const globSync = require('glob').sync;

const mkdirpSync = require('mkdirp').sync;
const last = require('lodash').last;
const publicFolder = path.resolve(__dirname, '../public/');

const MESSAGES_PATTERN = publicFolder + '/messages/**/*.json';
const LANG_DIR = publicFolder + '/locales/';
const LANG_PATTERN = publicFolder + '/locales/*.json';

try {
  fs.unlinkSync(publicFolder+'/locales/data.json');
} catch (error) {
  // eslint-disable-next-line
}

const mergedTranslations = globSync(LANG_PATTERN)
  .map((filename) => {
    const locale = last(filename.split('/')).split('.json')[0];
    // if (locale === 'data'){
    //   return 
    // }
    return {
      [locale]: JSON.parse(fs.readFileSync(filename, 'utf8')),
    };
  })
  .reduce((acc, localeObj) => ({
    ...acc,
    ...localeObj,
  }), {});


// Aggregates the default messages that were extracted from the example app's
// React components via the React Intl Babel plugin. An error will be thrown if
// there are messages in different components that use the same `id`. The result
// is a flat collection of `id: message` pairs for the app's default locale.
const defaultMessages = globSync(MESSAGES_PATTERN)
  .map(filename => fs.readFileSync(filename, 'utf8'))
  .map(file => JSON.parse(file))
  .reduce((collection, descriptors) => {
    descriptors.forEach(({
      id,
      defaultMessage,
    }) => {
      // eslint-disable-next-line no-prototype-builtins
      if (collection.hasOwnProperty(id)) {
        throw new Error(`Duplicate message id: ${id}`);
      }
      // eslint-disable-next-line no-param-reassign
      collection[id] = defaultMessage;
    });

    return collection;
  }, {});

// Create a new directory that we want to write the aggregate messages to
mkdirpSync(LANG_DIR);

// Merge aggregated default messages with the translated json files and
// write the messages to this directory
fs.writeFileSync(
  `${LANG_DIR}data.json`,
  JSON.stringify({
    en: defaultMessages,
    ...mergedTranslations,
  }, null, 2),
);
