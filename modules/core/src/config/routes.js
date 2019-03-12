// Libraries
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Pages
import Home from '../pages/Home';
import Test from '../pages/Test';

const Routes = () => (
  <Switch>
    <Route path="/test" component={Test} />
    <Route component={Home} />
  </Switch>
);

export default Routes;
