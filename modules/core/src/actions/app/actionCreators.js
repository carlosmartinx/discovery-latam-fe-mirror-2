import TYPES from './types';

// eslint-disable-next-line import/prefer-default-export
export const appSetLang = lang => ({ type: TYPES.APP.SETLANG, payload: { lang } });

export const appFetchHomeDataRequestAC = home => ({ type: TYPES.APP.HOME, payload: { home } });
