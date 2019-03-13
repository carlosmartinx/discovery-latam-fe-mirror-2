// Libraries
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';

const Loading = () => <div>Loading</div>;

const Home = Loadable({
  loader: () => import('../pages/Home'),
  loading: Loading,
});

const Test = Loadable({
  loader: () => import('../pages/Test'),
  loading: Loading,
});

const Routes = () => (
  <Switch>
    <Route path="/test" component={Test} />
    <Route component={Home} />
  </Switch>
);

export default Routes;
