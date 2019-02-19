const faker = require('faker');
const fs = require('fs');

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

exports.videoData = videoData;