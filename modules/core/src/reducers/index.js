import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import app from './app';
import test from './demo';
import programming from './programming';

export default history => combineReducers({
  router: connectRouter(history),
  app,
  test,
  programming,
});
