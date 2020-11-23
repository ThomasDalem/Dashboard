import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';

class YoutubeService extends Component {
  render() {
    return (
        <div className="card">
            <div className="youtube-service">
                Youtube
            </div>
        </div>
    );
  }
}

export default withRouter(YoutubeService);