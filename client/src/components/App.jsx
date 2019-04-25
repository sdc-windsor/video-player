import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import axios from 'axios';
import VideoNav from './VideoNav.jsx';
import MovieNav from './MovieNav.jsx';

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
    (id === '/') ? id = '/1' : id;
    this.retrieveData(id);
  }

  retrieveData(id) {
    // const url = 'http://127.0.0.1:3001';
    const url = `http://${window.location.hostname}:3001`;
    return axios.get(`${url}/videos${id}`)
      .then((response) => {
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
          <div>
            <MovieNav />
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
          </div>
        }
      </div>
    );
  }
}
