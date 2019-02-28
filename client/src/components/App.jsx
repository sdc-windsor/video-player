import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import VideoNav from './VideoNav.jsx';
// import getVideoData from '../../../helpers/getVideoData.js';
import axios from 'axios';

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
    (id === '/') ? id = '/1': id = id;
    this.retrieveData(id);
  }

  retrieveData(id) {
    return axios.get(`http://localhost:3000/videos${id}`)
      .then((response) => {
        console.log('SUCCESS YOU RETRIEVED THE DATA', response);
        const { video_url, title } = response.data[0];
        this.setState({
          video_url,
          title,
        });
      })
      .catch((error) => {
        if (error) {
          console.error('ERROR IN AXIOS API REQ', error);
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

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sollicitudin massa massa, vel volutpat lacus mollis a. Fusce eget dui varius, fringilla enim vitae, porta enim. Pellentesque posuere feugiat lectus nec ultricies. Vivamus semper vulputate augue non posuere. Aenean commodo lorem ut lorem sollicitudin, eu dapibus urna mattis. Integer nisl felis, finibus a erat ac, fringilla consectetur justo. Praesent tincidunt lectus in eros pharetra convallis. Phasellus congue tellus sed malesuada feugiat. Nulla id viverra mi, non pretium erat. Sed arcu nunc, gravida sit amet metus nec, euismod lacinia lacus. Donec euismod, sapien nec mattis malesuada, erat arcu iaculis nulla, aliquet tincidunt orci enim at lectus. Integer in arcu quis enim lacinia bibendum.

Duis ac tincidunt urna. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse commodo ligula non tincidunt accumsan. Sed sapien arcu, dapibus non laoreet ut, faucibus at erat. Maecenas dapibus odio nec lorem luctus faucibus. Cras viverra sem ut diam consequat vulputate. Donec enim lorem, consectetur vitae enim sit amet, sollicitudin blandit lectus. Maecenas rutrum luctus efficitur. Aliquam nec felis eget tortor feugiat condimentum non ut mauris. In feugiat convallis nulla in faucibus. Maecenas in ante posuere, ultricies augue pretium, porttitor ligula. Vestibulum sagittis, erat eget luctus vehicula, est ex posuere velit, consequat vulputate magna nulla in mi. Pellentesque tristique facilisis tellus. Maecenas odio libero, mattis non pulvinar in, laoreet id nulla. Nunc pretium vulputate magna in aliquet.

Nullam ultricies felis vel massa pulvinar, nec pretium ante eleifend. Nulla dolor tortor, ornare sit amet mattis eget, ullamcorper efficitur ipsum. Praesent lectus tellus, maximus vel magna id, efficitur vehicula nisl. Phasellus dictum risus ac augue feugiat, eu luctus risus lobortis. Etiam vitae interdum nibh. Proin finibus turpis eu magna mattis tristique. Proin in augue in ipsum varius finibus luctus vel metus. Fusce placerat interdum sodales. Aenean vehicula id purus sit amet egestas. Suspendisse et neque in velit pulvinar cursus id non mi.

Quisque sollicitudin tincidunt nunc, id gravida mauris tincidunt ac. Fusce risus erat, auctor sed turpis eu, vestibulum faucibus sem. Mauris eget imperdiet tellus. Praesent bibendum, elit a varius placerat, ligula leo luctus nisi, sed efficitur nulla sem id sem. Sed varius sollicitudin dui, et tincidunt ex aliquet nec. Suspendisse tortor nulla, rutrum vitae sapien et, placerat ultricies nunc. In fermentum bibendum lectus, ut consectetur orci bibendum id. Aenean sed pellentesque orci, ac gravida lorem. Mauris efficitur eleifend erat et placerat. Nullam gravida varius nulla ac luctus. Quisque vitae tincidunt mauris. Nam iaculis libero nisl. Suspendisse potenti. Integer auctor dictum ex, sit amet sodales arcu ultricies nec. Vivamus pulvinar maximus nisi, at blandit dui pellentesque at. Pellentesque sollicitudin odio vitae nunc auctor lobortis.

Fusce euismod leo ut est porta dictum. Sed eget aliquet odio. Nullam eleifend tempus justo, eget aliquet justo euismod et. Integer ac turpis ac sapien mollis commodo. Duis a mauris rhoncus, luctus neque non, fermentum quam. Vestibulum molestie tortor ut ultrices sollicitudin. Cras aliquet scelerisque justo ut vehicula. Suspendisse id ipsum ac lacus tincidunt efficitur. Curabitur pretium nisi pharetra pellentesque consequat. Vivamus finibus nulla ut eleifend varius. Vestibulum at pharetra ligula, vel ullamcorper ipsum. Sed vel euismod purus.

Donec fermentum ligula at orci scelerisque condimentum. Ut rhoncus urna vel lacus cursus, a ultricies diam lobortis. Etiam a quam erat. In consectetur sapien ac ex sagittis congue vel eget augue. Vivamus egestas felis sed neque fringilla dapibus. Duis tincidunt fermentum sagittis. Morbi sollicitudin elementum justo ac tincidunt. Nam aliquet leo tellus, ut ullamcorper justo egestas eget. Etiam sagittis semper purus et pulvinar.
        </p>
        <p>
          Maecenas accumsan nunc quis quam gravida suscipit. Aliquam volutpat consectetur ante, vel consequat odio fermentum eu. Mauris nec nisi non augue convallis venenatis vitae vel dui. Vestibulum urna nibh, malesuada at massa id, eleifend sagittis mi. Ut ullamcorper elit eu dignissim efficitur. Integer porta fermentum sem, at accumsan justo. Aliquam pharetra mi eget diam convallis, vitae egestas augue elementum. Vestibulum vitae risus vel enim vestibulum ultricies. Maecenas euismod, lacus eu vestibulum tempor, orci lectus rhoncus felis, sed mattis ex est eu sapien. Quisque erat augue, dignissim in posuere quis, maximus non tortor.

Integer dolor enim, ultricies sit amet sodales eget, pretium a dolor. Donec sit amet turpis id ligula viverra ornare. Sed ac ultrices tellus. Nam dictum congue felis vel efficitur. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce laoreet dignissim tincidunt. Aliquam et augue sit amet nisl fermentum laoreet hendrerit at tortor.

In aliquam mi ac sollicitudin pretium. Morbi aliquet facilisis ultrices. Aenean vehicula justo ac imperdiet posuere. Donec eleifend commodo nisl in tempor. Praesent ipsum tortor, pharetra et ipsum vitae, fermentum luctus turpis. Maecenas aliquet enim vitae molestie blandit. In hac habitasse platea dictumst. Morbi pharetra, lacus in feugiat scelerisque, eros sem semper eros, eleifend imperdiet libero nibh vel massa. Vestibulum laoreet commodo magna a vestibulum. Ut egestas nisl a neque pellentesque, in dictum arcu auctor. Duis in lacus auctor odio porta efficitur. Pellentesque euismod risus quis sapien hendrerit commodo. Donec id auctor mi, a imperdiet enim.

Mauris ultricies lorem non neque accumsan euismod. Donec faucibus metus ac magna tempus, euismod scelerisque dui pellentesque. Maecenas est urna, consequat eget sapien nec, accumsan tristique erat. Phasellus in leo ipsum. Quisque pretium faucibus risus eu vehicula. Maecenas suscipit enim ex, vitae consequat tellus gravida eget. Quisque viverra rutrum diam, scelerisque congue magna ornare sit amet. In at elit eu sapien aliquam facilisis at quis ligula. Suspendisse nec ipsum quis felis facilisis fringilla. Duis elit lorem, blandit sed viverra eu, semper at ante. Morbi porttitor vehicula ornare. Donec ac lobortis urna, in cursus ex. Vestibulum et augue vitae diam dapibus rhoncus bibendum posuere turpis.

Nam non lacus nec ex convallis mattis venenatis ut enim. Proin rhoncus, est eu pulvinar suscipit, purus ex ultricies nisl, ut rhoncus diam nisi commodo diam. Praesent nec imperdiet nibh. Maecenas ultrices, urna in vestibulum lacinia, dolor quam consectetur ipsum, venenatis finibus ipsum nibh convallis enim. Nam sagittis tempor vehicula. Nunc at tortor id mi eleifend auctor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;

Fusce ornare fermentum maximus. Donec gravida ante placerat diam sollicitudin dapibus. Ut auctor quam sed orci scelerisque interdum. Cras venenatis, lectus et lacinia finibus, velit metus auctor nunc, sed elementum sem tortor at quam. Fusce consectetur tempus dignissim. Etiam rhoncus augue ut dolor facilisis, at tempor dolor commodo. In interdum porttitor risus, vitae efficitur elit bibendum in. Mauris porttitor sed ante at rutrum.
        </p>
        </div>
        }
    </div>
    )
  }
}