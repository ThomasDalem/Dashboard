import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';

class YoutubeNbSubscribes extends Component {
  render() {
    return (
        <div className="card">
            <div className="youtube-subscribes-widget">
                YoutubeNbSubscribes
            </div>
        </div>
    );
  }
}

export default withRouter(YoutubeNbSubscribes);