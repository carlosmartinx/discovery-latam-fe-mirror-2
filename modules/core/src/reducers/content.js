import TYPES from '../actions/content/types';

export const initialState = {
  data: {},
  loading: false,
  error: {},
};

const contentReducer = (state = initialState, { type, payload = null }) => {
  switch (type) {
    case TYPES.CONTENT.SET.REQUEST:
      return {
        ...state,
        loading: true,
      };
    case TYPES.CONTENT.SET.SUCCESS:
      return {
        ...state,
        loading: false,
        data: payload.data,
      };
    case TYPES.CONTENT.SET.ERROR:
      return {
        ...state,
        loading: false,
        error: payload.error,
      };
    default:
      return state;
  }
};

export default contentReducer;
