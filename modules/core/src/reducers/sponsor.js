import TYPES from '../actions/sponsor/types';

export const initialState = {
  sponsor: {},
  loading: false,
  error: {},
};

const sponsorReducer = (state = initialState, { type, payload = null }) => {
  switch (type) {
    case TYPES.SPONSOR.SET.REQUEST:
      return {
        ...state,
        loading: true,
      };
    case TYPES.SPONSOR.SET.SUCCESS:
      return {
        ...state,
        loading: false,
        sponsor: payload.data,
      };
    case TYPES.SPONSOR.SET.ERROR:
      return {
        ...state,
        loading: false,
        error: payload.error,
      };
    default:
      return state;
  }
};

export default sponsorReducer;
