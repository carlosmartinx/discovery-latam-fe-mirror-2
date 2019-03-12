// Libraries
import React from 'react';
// import PropTypes from 'prop-types';
import { BrowserRouter as Router } from 'react-router-dom';

// Components
import Routes from './routes';

/**
 * this configuration let add future components that will be need staty outside from router feature
 * modal, toasts...etc
 */
const AppRouter = () => (
  <Router>
    <Routes />
  </Router>
);

export default AppRouter;
