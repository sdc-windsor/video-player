const faker = require('faker');

const videoUrls = [
  'https://player.vimeo.com/video/65107797/',
  'https://player.vimeo.com/video/316284002/',
  'https://player.vimeo.com/video/78110105/',
  'https://player.vimeo.com/video/117747482/',
  'https://player.vimeo.com/video/54802209/',
  'https://player.vimeo.com/video/35159390/',
  'https://player.vimeo.com/video/25658743/',
  'https://player.vimeo.com/video/89009039/',
  'https://player.vimeo.com/video/688779/',
  'https://player.vimeo.com/video/7977632/',
];

const thumbnails = [
  'https://i.vimeocdn.com/video/435992078_130x73.jpg',
  'https://i.vimeocdn.com/video/758264042_130x73.jpg',
  'https://i.vimeocdn.com/video/453451270_130x73.jpg',
  'https://i.vimeocdn.com/video/504556356_130x73.jpg',
  'https://i.vimeocdn.com/video/497536567_130x73.jpg',
  'https://i.vimeocdn.com/video/240103331_130x73.jpg',
  'https://i.vimeocdn.com/video/169092890_130x73.jpg',
  'https://i.vimeocdn.com/video/499453777_130x73.jpg',
  'https://i.vimeocdn.com/video/51685906_130x73.jpg',
  'https://i.vimeocdn.com/video/35989560_130x73.jpg',
];

const generateJSONVideoData = (arr1, arr2) => {
  const data = [];
  // iterate until there are 100 entries in the array
  for (let i = 0; i < 10000; i++) {
    // assign current url to a variable
    const url = arr1[Math.floor(Math.random() * arr1.length)];
    // update the url with incrementing queryNumber
    const updatedUrl = `${url}?v=${i + 1}`;
    // create key's in the object and use faker for some of the vals
    data.push({
      video_url: updatedUrl,
      thumbnail: arr2[Math.floor(Math.random() * arr2.length)],
      title: faker.address.streetName(),
      author: faker.internet.userName(),
      plays: faker.random.number(),
    });
  }
  return data;
};

const videoData = generateJSONVideoData(videoUrls, thumbnails);

module.exports = videoData;
