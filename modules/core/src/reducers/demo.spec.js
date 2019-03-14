/**
 * filename demo for avoid test runner fails
 */
import reducer, { initialState } from './demo';
import TYPES from '../actions/test/types';

describe('test reducer', () => {
  it('should return the initial state', () => {
    const expectedCase = { ...initialState };
    expect(reducer(undefined, {})).toEqual(expectedCase);
  });

  it('should handle TYPES.TEST.SET.REQUEST', () => {
    const expectedCase = {
      ...initialState,
      loading: true,
    };
    expect(reducer(undefined, { type: TYPES.TEST.SET.REQUEST })).toEqual(expectedCase);
  });
});
