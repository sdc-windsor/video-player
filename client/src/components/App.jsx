import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import axios from 'axios';
import VideoNav from './VideoNav.jsx';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      video_url: '',
      title: '',
    };

    this.retrieveData = this.retrieveData.bind(this);
  }

  componentDidMount() {
    let id = window.location.pathname;
    console.log('****ID IN COMPONENTDIDMOUNT****', id);
    (id === '/') ? id = '/1' : id;
    this.retrieveData(id);
  }

  retrieveData(id) {
    return axios.get(`http://localhost:3000/videos${id}`)
      .then((response) => {
        console.log('SUCCESS YOU RETRIEVED THE DATA', response.data);
        const { video_url, title } = response.data[0];
        this.setState({
          video_url,
          title,
        });
      })
      .catch((error) => {
        if (error) {
          console.error('ERROR IN AXIOS API REQUEST', error);
        }
      });
  }

  render() {
    const { video_url, title } = this.state;
    return (
      <div>
        {(video_url === '') ? <div>Loading...</div> :
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
        }
      </div>
    );
  }
}
