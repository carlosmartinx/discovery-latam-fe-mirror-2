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

const Gallery = Loadable({
  loader: () => import(/* webpackChunkName: "test" */ '../pages/Gallery'),
  loading: Loading,
  modules: ['gallery'],
});

const Routes = () => (
  <Switch>
    <Route path="/test" component={Test} />
    <Route path="/gallery" component={Gallery} />
    <Route component={Home} />
  </Switch>
);

export default Routes;
