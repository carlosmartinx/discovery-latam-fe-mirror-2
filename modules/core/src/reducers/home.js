import TYPES from '../actions/home/types';

export const initialState = {
  home: {},
  loading: false,
  error: {},
};

const homeReducer = (state = initialState, { type, payload = null }) => {
  switch (type) {
    case TYPES.HOME.SET.REQUEST:
      return {
        ...state,
        loading: true,
      };
    case TYPES.HOME.SET.SUCCESS:
      return {
        ...state,
        loading: false,
        home: payload.data,
      };
    case TYPES.HOME.SET.ERROR:
      return {
        ...state,
        loading: false,
        error: payload.error,
      };
    default:
      return state;
  }
};

export default homeReducer;
