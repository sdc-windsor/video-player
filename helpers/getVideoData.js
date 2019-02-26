const axios = require('axios');

const getVideoData = async (id) => {
  try {
    return await axios.get(`http://localhost:3000/videos/${id}`);
  } catch(err){
    console.error('found an error in axios call', err);
  }
}

module.exports = getVideoData;