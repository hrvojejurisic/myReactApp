import React from 'react';
import createHistory from 'history/createBrowserHistory';
import { Router, Switch, Route, Redirect } from 'react-router-dom';

// Modules
import { Home } from 'modules';

// Components
const history = createHistory();

const Routing = () => (
  <Router history={history}>
    { /* <Header  - jer navigacija mora biti child od routera /> */ } 
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  </Router>
);

export default Routing;