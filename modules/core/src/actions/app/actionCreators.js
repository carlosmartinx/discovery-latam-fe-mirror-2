import TYPES from './types';

// eslint-disable-next-line import/prefer-default-export
export const appSetLang = lang => ({ type: TYPES.APP.SETLANG, payload: { lang } });
