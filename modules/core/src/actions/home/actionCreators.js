import TYPES from './types';

// eslint-disable-next-line import/prefer-default-export
// eslint-disable-next-line max-len
// export const appFetchHomeDataRequestAC = home => ({ type: TYPES.HOME.REQUEST, payload: { home } });

export const appFetchHomeDataRequestAC = () => ({ type: TYPES.HOME.SET.REQUEST });

export const appFetchHomeDataSuccessAC = data => ({
  type: TYPES.HOME.SET.SUCCESS,
  payload: { data },
});

export const appFetchHomeDataErrorAC = error => ({
  type: TYPES.HOME.SET.ERROR,
  payload: { error },
});
