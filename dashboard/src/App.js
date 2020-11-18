import React, {Component}  from 'react';
import {Route, Switch, withRouter} from 'react-router-dom';

import Login from "./class/containers/Login";
import Register from "./class/containers/Register";
import Dashboard from "./class/containers/Dashboard";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
          <Route exact path="/dashboard">
            <Dashboard />
          </Route>
          <Route exact path="/dashboard/widgets">
            <Dashboard />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);