import TYPES from './types';

// eslint-disable-next-line import/prefer-default-export

export const appFetchContentDataRequestAC = () => ({ type: TYPES.SPONSOR.SET.REQUEST });

export const appFetchContentDataSuccessAC = (data, key = null) => ({
  type: TYPES.SPONSOR.SET.SUCCESS,
  payload: { data, key },
});

export const appFetchContentDataErrorAC = error => ({
  type: TYPES.SPONSOR.SET.ERROR,
  payload: { error },
});
