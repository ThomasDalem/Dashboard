import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

class Weather extends Component {
  constructor(props) {
      super(props);
      console.log(this.props.user.token);
  }

  render() {
    return (
        <div className="card">
            <div className="weather-widget">
                Weather
                {this.props.user.token}
            </div>
        </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
      user: state.user
  }
}

export default withRouter(connect(mapStateToProps)(Weather));