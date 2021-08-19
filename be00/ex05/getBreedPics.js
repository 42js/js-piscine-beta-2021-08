const axios = require('axios');

const getBreedPics = async (breed) => {
  try {
    body = await axios.get(`https://dog.ceo/api/breed/${breed}/images/random/10`);
    if (body.data.status !== 'success') throw 'API failed';
    return body.data.message;
  } catch (error) {
    console.error(error);
  }
};

module.exports = getBreedPics;