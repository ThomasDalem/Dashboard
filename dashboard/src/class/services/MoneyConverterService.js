import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';

class MoneyConverterService extends Component {
  render() {
    return (
        <div className="card">
            <div className="money-service">
                Money
            </div>
        </div>
    );
  }
}

export default withRouter(MoneyConverterService);