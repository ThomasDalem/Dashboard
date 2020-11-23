import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';

class WeatherForcast extends Component {
  render() {
    return (
        <div className="card">
            <div className="weather-forcast-widget">
                WeatherForcast
            </div>
        </div>
    );
  }
}

export default withRouter(WeatherForcast);