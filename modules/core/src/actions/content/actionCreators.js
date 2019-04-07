import TYPES from './types';

// eslint-disable-next-line import/prefer-default-export

export const appFetchContentDataRequestAC = () => ({ type: TYPES.CONTENT.SET.REQUEST });

export const appFetchContentDataSuccessAC = (data, key = null) => ({
  type: TYPES.CONTENT.SET.SUCCESS,
  payload: { data, key },
});

export const appFetchContentDataErrorAC = error => ({
  type: TYPES.CONTENT.SET.ERROR,
  payload: { error },
});
