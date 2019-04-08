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
  loader: () => import(/* webpackChunkName: "homechannel" */ '../pages/Channel'),
  loading: Loading,
  modules: ['channel'],
});

const Show = Loadable({
  loader: () => import(/* webpackChunkName: "homechannel" */ '../pages/Show'),
  loading: Loading,
  modules: ['show'],
});

const Sponsor = Loadable({
  loader: () => import(/* webpackChunkName: "Sponsor" */ '../pages/Sponsor'),
  loading: Loading,
  modules: ['sponsor'],
});

const Routes = () => (
  <Switch>
    <Route path="/test" component={Test} />
    <Route exact path="/:route" component={Channel} />
    <Route exact path="/sponsor/:name" component={Sponsor} />
    <Route path="/:route/:show" component={Show} />
    <Route component={Home} />
  </Switch>
);

export default Routes;
