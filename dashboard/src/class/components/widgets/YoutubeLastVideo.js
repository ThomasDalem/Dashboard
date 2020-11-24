import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';

class YoutubeLastVideo extends Component {
  render() {
    return (
        <div className="card">
            <div className="youtube-last-video-widget">
                YoutubeLastVideo
            </div>
        </div>
    );
  }
}

export default withRouter(YoutubeLastVideo);