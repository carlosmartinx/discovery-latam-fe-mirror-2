import TYPES from './types';

export const testSetRequest = () => ({ type: TYPES.TEST.SET.REQUEST });

export const testSetSuccess = data => ({
  type: TYPES.TEST.SET.SUCCESS,
  payload: { data },
});
