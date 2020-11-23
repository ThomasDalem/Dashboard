import React, {Component} from 'react';
import {withRouter, Switch, Route} from 'react-router-dom';

import Navbar from '../components/Navbar';
import ChooseWidgets from '../components/ChooseWidgets';

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      widgets: []
    };
  }

  render() {
    return (
        <React.Fragment>
          <Navbar />
          <main className="dashboard-page">
            <Switch>
              <Route exact path="/dashboard">
                <div className="fill-height">
                  <div className="cards-field">
                    {this.state.widgets}
                  </div>
                </div>
              </Route>
              <Route exact path="/dashboard/widgets">
                <ChooseWidgets widgets={this.state.widgets}/>
              </Route>
            </Switch>
          </main>
        </React.Fragment>
    );
  }
}

export default withRouter(Dashboard);