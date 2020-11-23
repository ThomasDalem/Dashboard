import React, {Component} from 'react';
import {withRouter, Switch, Route} from 'react-router-dom';

import Navbar from '../components/Navbar';
import ChooseWidgets from '../components/ChooseWidgets';
import TimeZoneService from '../services/TimeZoneService';
import MeteoService from '../services/MeteoService';
import MoneyService from '../services/MoneyConverterService';
import YoutubeService from '../services/YoutubeService';

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      widgets: [<TimeZoneService />, <MeteoService />, <YoutubeService />, <MoneyService />]
    };
  }

  render() {
    return (
        <React.Fragment>
          <Navbar />
          <main className="dashboard-page">
            <Switch>
              <Route exact path="/dashboard">
                <div className="cards-field">
                  {this.state.widgets}
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