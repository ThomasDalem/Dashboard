import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';

class TimeZone extends Component {
  constructor(props) {
    super(props);

    this.intervalId = null;
    this.state = {
        year: 2020,
        month: 11,
        day: 15,
        hour: 11,
        minute: 30,
        second: 36,
        city: "Paris",
    };
  }

  componentDidMount() {
    this.updateClock();
  }

  componentWillUnmount() {
    clearInterval(this.intervalId)
  }

  updateClock() {
    //setInterval(() => this.setState({test: moment(Date.now()).tz("Europe/Paris").format()}), 1000);
  }

  render() {
    return (
        <div className="card">
            <div className="time-widget">
                <div className="info">
                    <div>
                        <div className="image">Image</div>
                        <h2 className="title">Clock</h2>
                        <h3 className="city-name">{this.state.city}</h3>
                    </div>
                    <div>
                        <div>{this.state.day}/{this.state.month}/{this.state.year}</div>
                        <div>{this.state.hour}h - {this.state.minute}m - {this.state.second}s</div>
                    </div>
                </div>
                <div className="input">
                    <div>Input</div>
                </div>
            </div>
        </div>
    );
  }
}

export default withRouter(TimeZone);