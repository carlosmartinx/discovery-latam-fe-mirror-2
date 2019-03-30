import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import app from './app';
import test from './demo';

export default history => combineReducers({
  router: connectRouter(history),
  app,
  test,
});
