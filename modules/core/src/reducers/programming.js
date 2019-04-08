import TYPES from '../actions/programming/types';

export const initialState = {
  programming: {},
  loading: false,
  error: {},
};

const programmingReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case TYPES.PROGRAMMING.SET.REQUEST:
      return {
        ...state,
        loading: true,
      };
    case TYPES.PROGRAMMING.SET.SUCCESS:
      return {
        ...state,
        loading: false,
        programming: payload.data,
      };
    case TYPES.PROGRAMMING.SET.ERROR:
      return {
        ...state,
        loading: false,
        error: payload.error,
      };
    default:
      return state;
  }
};

export default programmingReducer;
