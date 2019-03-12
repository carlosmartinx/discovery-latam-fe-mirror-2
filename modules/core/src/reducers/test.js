import TYPES from '../actions/test/types';

const initialState = {
  loading: false,
  test: '',
};

const testReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.TEST.SET.REQUEST:
      return {
        ...state,
        loading: true,
      };
    case TYPES.TEST.SET.SUCCESS:
      return {
        ...state,
        test: action.payload.data,
        loading: false,
      };
    default:
      return state;
  }
};

export default testReducer;
