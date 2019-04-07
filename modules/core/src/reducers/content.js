import TYPES from '../actions/content/types';

export const initialState = {
  data: {},
  loading: false,
  error: {},
};

const contentReducer = (state = initialState, { type, payload = null }) => {
  const key = (payload && payload.key) ? payload.key : 'dataDefault';
  const combinedData = state.data;
  switch (type) {
    case TYPES.CONTENT.SET.REQUEST:
      return {
        ...state,
        loading: true,
      };
    case TYPES.CONTENT.SET.SUCCESS:
      combinedData[key] = payload.data;
      return {
        ...state,
        loading: false,
        data: combinedData,
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
