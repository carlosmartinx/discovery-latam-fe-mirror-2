import { testSetRequest, testSetSuccess } from './actionCreators';

const testAction = text => (dispatch, getState) => {
  dispatch(testSetRequest());

  setTimeout(() => {
    window.console.log('getState()', getState());
    dispatch(testSetSuccess(text));
  }, 1000);
};

export default testAction;
