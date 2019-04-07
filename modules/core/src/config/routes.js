// Libraries
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';

const Loading = () => <div>Loading</div>;

const Home = Loadable({
  loader: () => import(/* webpackChunkName: "home" */ '../pages/Home'),
  loading: Loading,
  modules: ['homepage'],
});

const Test = Loadable({
  loader: () => import(/* webpackChunkName: "test" */ '../pages/Test'),
  loading: Loading,
  modules: ['test'],
});

const Channel = Loadable({
  loader: () => import(/* webpackChunkName: "home" */ '../pages/Channel'),
  loading: Loading,
  modules: ['channel'],
});

const Routes = () => (
  <Switch>
    <Route path="/test" component={Test} />
    <Route component={Home} />
    <Route path="/channel" component={Channel} />
  </Switch>
);

export default Routes;
