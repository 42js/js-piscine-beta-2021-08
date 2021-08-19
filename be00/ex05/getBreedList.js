const axios = require('axios');

const getBreedList = async () => {
  try {
    body = await axios.get('https://dog.ceo/api/breeds/list/all');
    if (body.data.status !== 'success') throw 'API failed';
    return body.data.message;
  } catch (error) {
    console.error(error);
  }
};

module.exports = getBreedList;