// Libraries
import React, { Fragment } from 'react';

// Components
import Routes from './routes';

/**
 * this configuration let add future components that will be need staty outside from router feature
 * modal, toasts...etc
 */
const AppRouter = () => (
  <Fragment>
    <Routes />
  </Fragment>
);

export default AppRouter;
