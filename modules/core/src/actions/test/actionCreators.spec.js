import { testSetRequest, testSetSuccess } from './actionCreators';
import TYPES from './types';

describe('TEST actionCreators', () => {
  it('should create testSetRequest AC', () => {
    const expectedAction = { type: TYPES.TEST.SET.REQUEST };
    expect(testSetRequest()).toEqual(expectedAction);
  });
  it('should create testSetSuccess AC', () => {
    const data = 'test';

    const expectedAction = {
      type: TYPES.TEST.SET.SUCCESS,
      payload: { data },
    };
    expect(testSetSuccess(data)).toEqual(expectedAction);
  });
});
