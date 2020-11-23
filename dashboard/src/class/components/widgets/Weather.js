import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';

class Weather extends Component {
  render() {
    return (
        <div className="card">
            <div className="weather-widget">
                Weather
            </div>
        </div>
    );
  }
}

export default withRouter(Weather);