import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import VideoNav from './VideoNav.jsx';
import getVideoData from '../../../helpers/getVideoData.js';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      video_url: '',
      title: '',
      searchedId: 5,
    };

    this.retrieveData = this.retrieveData.bind(this);
  }

  async retrieveData() {
    const { searchedId } = this.state;
    const response = await getVideoData(searchedId);
    if (response) {
      console.log('SUCCESS YOU RETRIEVED THE DATA', response);
      const { video_url, title } = response.data[0]
      this.setState({
        video_url,
        title
      });
    }
  }

  componentDidMount() {
    this.retrieveData();
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
          <VideoNav url={video_url} title={title}/>
        </div>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pretium auctor vestibulum. Suspendisse sit amet nisl sodales, tempus tellus ut, pulvinar sapien. Duis vel eros sed sapien maximus consectetur. Ut ultrices erat ut sapien tincidunt consequat. Nulla et orci sit amet justo sodales ornare rutrum eget dui. Sed gravida lacus in augue vehicula lobortis nec eu lorem. Nullam tristique purus urna, sit amet convallis sapien elementum at. Vestibulum sollicitudin nisl quis est ornare volutpat.
        </p>
        <p>
Etiam ante orci, euismod non ipsum quis, dictum efficitur nisi. Duis id quam convallis, placerat nibh eget, lobortis nisl. Ut tempor mauris eu consequat dapibus. Phasellus at suscipit nisl. Duis sed erat quam. Fusce faucibus iaculis dolor ut maximus. Proin id eleifend est. Praesent rhoncus lacinia ex, sit amet iaculis purus finibus in. Aliquam vehicula id massa in molestie. Vestibulum suscipit ante erat, nec malesuada lorem condimentum vitae. Duis ut purus eu neque tristique tempor id in ante. Aliquam maximus aliquet elit at dignissim.
        </p>
        <p>
Integer semper est sit amet sollicitudin ornare. Fusce sit amet finibus mi, sit amet malesuada diam. Aenean sollicitudin turpis mi, in consequat nisl tincidunt id. Integer maximus justo at tempor finibus. Integer dictum lacinia lacinia. In felis tortor, tincidunt dignissim risus in, sollicitudin maximus lorem. Maecenas nunc ipsum, molestie quis orci nec, pretium consequat urna. Nullam nec feugiat lectus. In imperdiet est sit amet metus vulputate sagittis. Duis eu hendrerit magna. Ut euismod magna velit, sit amet maximus eros aliquam non. Duis tincidunt orci a neque egestas semper.
        </p>
        <p>
Vivamus fermentum metus eget mi blandit cursus. Praesent tempor ante elit, sit amet ornare odio rutrum vitae. Sed quis ligula et metus mattis sollicitudin gravida in risus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur sed ipsum eget libero varius ultrices fermentum ac erat. In pretium sapien justo, id accumsan nibh scelerisque quis. Donec mollis bibendum hendrerit. Ut sed euismod lectus, tincidunt vestibulum nunc. Ut nisi massa, vehicula aliquam nisi quis, laoreet tincidunt libero. Ut vitae urna et urna convallis faucibus. Nullam erat nulla, porttitor in aliquet non, ultrices vulputate quam.
        </p>

        <p>
Integer a bibendum justo, et congue urna. Quisque suscipit nec tellus ut fringilla. Curabitur rutrum justo eget iaculis rutrum. Mauris in lorem vitae libero porta egestas. Praesent libero tellus, iaculis ut tellus in, dictum ultricies tellus. Nunc non turpis eget nisl scelerisque efficitur vitae non nibh. In sed orci in elit aliquam semper. Nam sem est, ornare quis est ut, bibendum volutpat libero. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pretium auctor vestibulum. Suspendisse sit amet nisl sodales, tempus tellus ut, pulvinar sapien. Duis vel eros sed sapien maximus consectetur. Ut ultrices erat ut sapien tincidunt consequat. Nulla et orci sit amet justo sodales ornare rutrum eget dui. Sed gravida lacus in augue vehicula lobortis nec eu lorem. Nullam tristique purus urna, sit amet convallis sapien elementum at. Vestibulum sollicitudin nisl quis est ornare volutpat.
        </p>
        <p>
Etiam ante orci, euismod non ipsum quis, dictum efficitur nisi. Duis id quam convallis, placerat nibh eget, lobortis nisl. Ut tempor mauris eu consequat dapibus. Phasellus at suscipit nisl. Duis sed erat quam. Fusce faucibus iaculis dolor ut maximus. Proin id eleifend est. Praesent rhoncus lacinia ex, sit amet iaculis purus finibus in. Aliquam vehicula id massa in molestie. Vestibulum suscipit ante erat, nec malesuada lorem condimentum vitae. Duis ut purus eu neque tristique tempor id in ante. Aliquam maximus aliquet elit at dignissim.
        </p>
        <p>
Integer semper est sit amet sollicitudin ornare. Fusce sit amet finibus mi, sit amet malesuada diam. Aenean sollicitudin turpis mi, in consequat nisl tincidunt id. Integer maximus justo at tempor finibus. Integer dictum lacinia lacinia. In felis tortor, tincidunt dignissim risus in, sollicitudin maximus lorem. Maecenas nunc ipsum, molestie quis orci nec, pretium consequat urna. Nullam nec feugiat lectus. In imperdiet est sit amet metus vulputate sagittis. Duis eu hendrerit magna. Ut euismod magna velit, sit amet maximus eros aliquam non. Duis tincidunt orci a neque egestas semper.
        </p>
        <p>

Vivamus fermentum metus eget mi blandit cursus. Praesent tempor ante elit, sit amet ornare odio rutrum vitae. Sed quis ligula et metus mattis sollicitudin gravida in risus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur sed ipsum eget libero varius ultrices fermentum ac erat. In pretium sapien justo, id accumsan nibh scelerisque quis. Donec mollis bibendum hendrerit. Ut sed euismod lectus, tincidunt vestibulum nunc. Ut nisi massa, vehicula aliquam nisi quis, laoreet tincidunt libero. Ut vitae urna et urna convallis faucibus. Nullam erat nulla, porttitor in aliquet non, ultrices vulputate quam.
        </p>

        <p>
Integer a bibendum justo, et congue urna. Quisque suscipit nec tellus ut fringilla. Curabitur rutrum justo eget iaculis rutrum. Mauris in lorem vitae libero porta egestas. Praesent libero tellus, iaculis ut tellus in, dictum ultricies tellus. Nunc non turpis eget nisl scelerisque efficitur vitae non nibh. In sed orci in elit aliquam semper. Nam sem est, ornare quis est ut, bibendum volutpat libero. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
    );
  }
}
