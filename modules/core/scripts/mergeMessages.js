/* eslint-disable */
const fs = require('fs');
const path = require('path');
const globSync = require('glob').sync;

const mkdirpSync = require('mkdirp').sync;
const { last, each } = require('lodash');

const publicFolder = path.resolve(__dirname, '../public/');

const args = require('minimist')(process.argv.slice(2))

const MESSAGES_PATTERN = publicFolder + '/messages/**/*.json';
const LANG_DIR = publicFolder + '/locales/';
const LANG_PATTERN = publicFolder + '/locales/*.json';

try {
  fs.unlinkSync(publicFolder+'/locales/data.json');
} catch (error) {
  // // console.log('error', error)
}

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
  

  // yarn buid:intl --lang=pt
  if (args.lang) {
    const newMessages = {}
    const langMessages = JSON.parse(fs.readFileSync(LANG_DIR + args.lang + '.json', 'utf8'));
    Object.keys(defaultMessages).forEach(msg => {
      if(!langMessages[msg]) {
        newMessages[msg] = ''
      }
    })
    fs.writeFileSync(
      `${LANG_DIR + args.lang}.json`,
      JSON.stringify({
       ...langMessages,
        ...newMessages,
      }, null, 2),
    );

  }

const mergedTranslations = globSync(LANG_PATTERN)
  .map((filename) => {
    const locale = last(filename.split('/')).split('.json')[0];
    return {
      [locale]: JSON.parse(fs.readFileSync(filename, 'utf8')),
    };
  })
  .reduce((acc, localeObj) => ({
    ...acc,
    ...localeObj,
  }), {});



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
