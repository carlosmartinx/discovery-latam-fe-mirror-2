// Libraries
import React from 'react';
import { withRouter } from 'react-router';

// Components
import Routes from './routes';

/**
 * this configuration let add future components that will be need staty outside from router feature
 * modal, toasts...etc
 */
const AppRouter = () => (
  <div id="app">
    <div id="content">
      <Routes />
    </div>
  </div>
);

export default withRouter(
  AppRouter,
);
