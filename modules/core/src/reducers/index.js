import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import app from './app';
import test from './demo';
import home from './home';
import data from './content';
import sponsor from './sponsor';

export default history => combineReducers({
  router: connectRouter(history),
  app,
  home,
  test,
  data,
  sponsor,
});
