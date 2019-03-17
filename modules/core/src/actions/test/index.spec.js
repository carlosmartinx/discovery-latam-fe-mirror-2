
import { testSetRequest, testSetSuccess } from './actionCreators';

import actions from '.';

const actionDispatched = [];

const dispatch = (actionCreator) => {
  actionDispatched.push(actionCreator);
};

describe('TEST actions', () => {
  it('should dispatch testSetRequest and testSetSuccess', () => {
    const text = 'test';
    actions(text)(dispatch);
    expect(actionDispatched[0]).toEqual(testSetRequest());
    expect(actionDispatched[1]).toEqual(testSetSuccess(text));
  });
});
