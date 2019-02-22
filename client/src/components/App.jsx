import React, { Component } from 'react';
import ReactPlayer from 'react-player';

export default class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="video-container">
        <div className="player">
          <ReactPlayer className="ReactPlayer" url="https://player.vimeo.com/video/316284002/?v=2" />
        </div>
      </div>
    );
  }
}
