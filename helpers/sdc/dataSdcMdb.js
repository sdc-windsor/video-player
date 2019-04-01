const faker = require('faker');
const { nextCount } = require('../../db/sdc/indexMdb.js')

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

const generateJSONVideoData = () => {
  return nextCount('videoId')
    .then((newId) => {
      const url = `${videoUrls[Math.floor(Math.random() * videoUrls.length)]}?v=${newId}`;

      return {
        id: newId,
        video_url: url,
        thumbnail: thumbnails[Math.floor(Math.random() * thumbnails.length)],
        title: faker.address.streetName(),
        author: faker.internet.userName(),
        plays: faker.random.number(),
      };
    });
};

module.exports = generateJSONVideoData;
