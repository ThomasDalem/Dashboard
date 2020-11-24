import React, {Component} from 'react';
import {withRouter, Switch, Route} from 'react-router-dom';

import Navbar from '../components/Navbar';
import ChooseWidgets from '../components/ChooseWidgets';
import TimeZone from '../components/widgets/TimeZone';
import Weather from '../components/widgets/Weather';
import WeatherForecast from '../components/widgets/WeatherForecast';
import Youtube from '../components/widgets/YoutubeNbViews';

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      widgets: [<Weather />]
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