// Libraries
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

// Reducers
import reducers from '../reducers';

const { NODE_ENV } = process.env;

const middlewares = [thunk];

let enhancers;

if (NODE_ENV === 'development') {
  const composeEnhancers =    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // eslint-disable-line
  enhancers = composeEnhancers(applyMiddleware(...middlewares));
} else {
  enhancers = applyMiddleware(...middlewares);
}

const store = createStore(reducers, enhancers);

export default store;
