import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';

class YoutubeNbViews extends Component {
  render() {
    return (
        <div className="card">
            <div className="youtube-views-widget">
                YoutubeNbViews
            </div>
        </div>
    );
  }
}

export default withRouter(YoutubeNbViews);