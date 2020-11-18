import React, {Component} from 'react';
import {withRouter, Switch, Route} from 'react-router-dom';

import Navbar from '../components/Navbar';
import MyWidgets from '../components/MyWidgets';
import ChooseWidgets from '../components/ChooseWidgets';

class Dashboard extends Component {
  render() {
    return (
        <React.Fragment>
          <Navbar />
          <main className="dashboard-page">
            <Switch>
              <Route exact path="/dashboard">
                <MyWidgets />
              </Route>
              <Route exact path="/dashboard/widgets">
                <ChooseWidgets />
              </Route>
            </Switch>
          </main>
        </React.Fragment>
    );
  }
}

export default withRouter(Dashboard);