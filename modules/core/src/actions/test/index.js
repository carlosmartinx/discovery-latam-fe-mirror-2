import { testSetRequest, testSetSuccess } from './actionCreators';

const testAction = text => (dispatch, getState) => { // eslint-disable-line
  dispatch(testSetRequest());
  dispatch(testSetSuccess(text));
};

export default testAction;
