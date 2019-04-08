import TYPES from './types';

// eslint-disable-next-line import/prefer-default-export

export const appFetchContentDataRequestAC = () => ({ type: TYPES.PROGRAMMING.SET.REQUEST });

export const appFetchContentDataSuccessAC = (data, key = null) => ({
  type: TYPES.PROGRAMMING.SET.SUCCESS,
  payload: { data, key },
});

export const appFetchContentDataErrorAC = error => ({
  type: TYPES.PROGRAMMING.SET.ERROR,
  payload: { error },
});
