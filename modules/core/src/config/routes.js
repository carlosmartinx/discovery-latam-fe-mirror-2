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

const Family = Loadable({
  loader: () => import(/* webpackChunkName: "family" */ '../pages/discFamily'),
  loading: Loading,
  modules: ['family'],
});

const DiscEspanol = Loadable({
  loader: () => import(/* webpackChunkName: "espanol" */ '../pages/discEspanol'),
  loading: Loading,
  modules: ['espanol'],
});

const Routes = () => (
  <Switch>
    <Route path="/test" component={Test} />
    <Route path="/discovery-en-espanol" component={DiscEspanol} />
    <Route path="/discovery-familia" component={Family} />
    <Route component={Home} />
  </Switch>
);

export default Routes;
