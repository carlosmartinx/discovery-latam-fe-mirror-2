import { combineReducers } from 'redux';
import app from './app';
import test from './demo';

const reducers = combineReducers({
  app,
  test,
});

export default reducers;
