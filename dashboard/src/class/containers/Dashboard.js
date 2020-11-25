import React, {Component} from 'react';
import {withRouter, Switch, Route} from 'react-router-dom';
import axios from 'axios';
import {connect} from "react-redux";

import Navbar from '../components/Navbar';
import ChooseWidgets from '../components/ChooseWidgets';

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      widgets: []
    };
  }

  componentDidMount() {
    axios.get('http://localhost:4200/widgets', {headers: { Authorization: this.props.user.token }})
      .then((resp) => {
        if (resp.status === 200) {
          const receivedWidgets = [];
          let i = 0;
          if (resp.data.weatherWidgets) {
            for (let widget of resp.data.weatherWidgets) {
              receivedWidgets.push(<Weather key={i} id={widget.id} />);
              i++;
            }
          }
          this.setState({widgets: receivedWidgets});
        }
      });
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

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default withRouter(connect(mapStateToProps)(Dashboard));