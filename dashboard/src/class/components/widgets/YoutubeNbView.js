import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';

class YoutubeNbView extends Component {
  render() {
    return (
        <div className="card">
            <div className="youtube-widget">
                Youtube
            </div>
        </div>
    );
  }
}

export default withRouter(YoutubeNbView);