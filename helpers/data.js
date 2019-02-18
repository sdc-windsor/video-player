const faker = require('faker');
const fs = require('fs');

/*
video urls:
1.'https://player.vimeo.com/video/65107797'
2.'https://player.vimeo.com/video/316284002'
3.'https://player.vimeo.com/video/78110105'
4.'https://player.vimeo.com/video/117747482'
5.'https://player.vimeo.com/video/54802209'
6.'https://player.vimeo.com/video/35159390/'
7.'https://player.vimeo.com/video/25658743/'
8.'https://player.vimeo.com/video/89009039/'
9.'https://player.vimeo.com/video/688779/'
10.https://player.vimeo.com/video/7977632/
*/

/*
video titles and authors:
1.'Omelette', 'Madeline Sharafian'
2. "ROCKY MOUNTAIN NATIONAL PARK", 'Rudy Wilms'
3.'Burton Presents BACKCOUNTRY [SNOWBOARDING]'  'Burton Snowboards'
4.'hiking.', 'fruitjuicer films'
5.'DYNAMIC NATURE', 'Morten Berg'
6.'Nature', 'Antonio De Rosa AIC-IMAGO'
7.'Nature', 'Chris.B'
8.'4K Nature', 'HD Nature Video by LoungeV'
9.'Nature','AlexeiP'
10. 'Nature Time Lapse III', 'mockmoon'
*/


/*
Thumbnails:
1.'https://i.vimeocdn.com/video/435992078_130x73.jpg'
2.'https://i.vimeocdn.com/video/758264042_130x73.jpg'
3.'https://i.vimeocdn.com/video/453451270_130x73.jpg'
4."https://i.vimeocdn.com/video/504556356_130x73.jpg"
5."https://i.vimeocdn.com/video/497536567_130x73.jpg"
6."https://i.vimeocdn.com/video/240103331_130x73.jpg"
7."https://i.vimeocdn.com/video/169092890_130x73.jpg"
8."https://i.vimeocdn.com/video/499453777_130x73.jpg"
9."https://i.vimeocdn.com/video/51685906_130x73.jpg"
10."https://i.vimeocdn.com/video/35989560_130x73.jpg"
*/

const videoUrls = [
  "https://player.vimeo.com/video/65107797/",
  "https://player.vimeo.com/video/316284002/",
  "https://player.vimeo.com/video/78110105/",
  "https://player.vimeo.com/video/117747482/",
  "https://player.vimeo.com/video/54802209/",
  "https://player.vimeo.com/video/35159390/",
  "https://player.vimeo.com/video/25658743/",
  "https://player.vimeo.com/video/89009039/",
  "https://player.vimeo.com/video/688779/",
  "https://player.vimeo.com/video/7977632/"
];

const thumbnails = [
  "https://i.vimeocdn.com/video/435992078_130x73.jpg",
  "https://i.vimeocdn.com/video/758264042_130x73.jpg",
  "https://i.vimeocdn.com/video/453451270_130x73.jpg",
  "https://i.vimeocdn.com/video/504556356_130x73.jpg",
  "https://i.vimeocdn.com/video/497536567_130x73.jpg",
  "https://i.vimeocdn.com/video/240103331_130x73.jpg",
  "https://i.vimeocdn.com/video/169092890_130x73.jpg",
  "https://i.vimeocdn.com/video/499453777_130x73.jpg",
  "https://i.vimeocdn.com/video/51685906_130x73.jpg",
  "https://i.vimeocdn.com/video/35989560_130x73.jpg"
];

// arr1 = videoUrls
// arr2 = thumbnails

const generateJSONVideoData = (arr1, arr2) => {
  // index counter
  let counter = 0;
  // appended query num
  let queryNum = 1;
  // create a return array
  let data = [];
  // iterate until there are 100 entries in the array
  for (var i = 0; i <= 99; i++) {
    // assign current url to a variable
    let url = arr1[counter];
    // update the url with incrementing queryNumber
    let updatedUrl = `${url}?v=${queryNum}`
    // create key's in the object and use faker for some of the vals
    data.push({
      video_id: JSON.stringify(queryNum),
      video_url: updatedUrl,
      thumbnail: arr2[counter],
      title: faker.address.streetName(),
      author: faker.internet.userName(),
      plays: JSON.stringify(faker.random.number())
    });
    (counter === arr1.length - 1) ? counter = 0 : counter++;
    queryNum++;
  }
  // return the array obj;
  return data;
};

let videoData = generateJSONVideoData(videoUrls, thumbnails);

// commented out to note override the JSON data that will be used to store it in the db.
// fs.writeFile(__dirname + '/videoData.json', JSON.stringify(videoData, null, 2), (err) => {
//   if (err) {
//     console.log('unable to write JSON file', err);
//   }
//   console.log('Success you wrote the file!!!');
// });

exports.videoData = videoData;