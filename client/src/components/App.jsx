import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import VideoNav from './VideoNav.jsx';
import getVideoData from '../../../helpers/getVideoData.js';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      video_url: 'https://player.vimeo.com/video/54802209/?v=5',
      title: 'Marcus Island',
      searchedId: 3,
    };

    this.retrieveData = this.retrieveData.bind(this);
  }

  componentWillMount() {
    this.retrieveData();
  }

  async retrieveData() {
    const { searchedId } = this.state;
    const response = await getVideoData(searchedId);
    if (response) {
      console.log('SUCCESS YOU RETRIEVED THE DATA', response);
      const { video_url, title } = response.data[0];
      this.setState({
        video_url,
        title,
      });
    }
  }

  render() {
    const { video_url, title } = this.state;

    return (
      <div className="video-container">
        <div className="player">
          <ReactPlayer
            className="reactPlayer"
            width="100%"
            height="500px"
            url={video_url}
          />
        </div>
        <div>
          <VideoNav url={video_url} title={title} />
        </div>
      </div>
    );
  }
}
