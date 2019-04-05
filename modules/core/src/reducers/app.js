import TYPES from '../actions/app/types';

export const initialState = {
  lang: '',
  // home: '',
};

const appReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case TYPES.APP.SETLANG:
      return {
        ...state,
        lang: payload.lang,
      };
    default:
      return state;
  }
};

export default appReducer;
