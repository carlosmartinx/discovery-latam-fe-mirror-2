import {
  appSetLang,
  appFetchHomeDataRequestAC,
} from './actionCreators';

// eslint-disable-next-line import/prefer-default-export
export const appSetLangAction = lang => dispatch => dispatch(appSetLang(lang));

export const appGetHomeAction = () => dispatch => dispatch(appFetchHomeDataRequestAC());
