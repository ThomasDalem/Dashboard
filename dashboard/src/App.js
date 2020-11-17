import React, {Component}  from 'react';
import {Route, Switch, withRouter} from 'react-router-dom';

import Login from "./class/containers/Login/Login";
import Logout from "./class/containers/Login/Logout";

class App extends Component {
  async UNSAFE_componentWillMount() {
    this.props.history.push('/login');
  }

  render() {
    return (
      <Switch>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/logout">
          <Logout />
        </Route>
        <Route path="/">
          <div>uhfiuahfizauhfaiuh</div>
        </Route>
      </Switch>
    );
  }
}

export default withRouter(App);