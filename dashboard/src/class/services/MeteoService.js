import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';

class MeteoService extends Component {
  render() {
    return (
        <div className="card">
            <div className="meteo-service">
                Méteo
            </div>
        </div>
    );
  }
}

export default withRouter(MeteoService);