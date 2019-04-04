import TYPES from '../actions/app/types';

export const initialState = {
  home: '',
};

const homeReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case TYPES.APP.HOME:
      return {
        ...state,
        home: payload.home,
      };
    default:
      return state;
  }
};

export default homeReducer;
