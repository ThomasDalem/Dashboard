import React, {Component}  from 'react';
import {Route, Switch, withRouter} from 'react-router-dom';

import Login from "./class/containers/Login";
import Register from "./class/containers/Register";
import Dashboard from "./class/containers/Dashboard";

class App extends Component {
  constructor(props) {
      super(props);

      this.state = {
        path: "/login"
      };
    }

  //async componentDidMount() {
  //  this.props.history.push(this.state.path);
  //}

  render() {
    return (
      <div className="app">
        <Route path="/">
          <Login />
        </Route>
        <Route exact path="/register">
          <Register />
        </Route>
        <Route exact path="/dashboard">
          <Dashboard />
        </Route>
      </div>
    );
  }
}

export default withRouter(App);