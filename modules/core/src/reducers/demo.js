/**
 * filename demo for avoid test runner fails
 */
import TYPES from '../actions/test/types';

export const initialState = {
  loading: false,
  test: '',
};

const testReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case TYPES.TEST.SET.REQUEST:
      return {
        ...state,
        loading: true,
      };
    case TYPES.TEST.SET.SUCCESS:
      return {
        ...state,
        test: payload.data,
        loading: false,
      };
    default:
      return state;
  }
};

export default testReducer;
