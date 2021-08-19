const axios = require('axios');

const getPug = async () => {
  try {
    const pug = await axios.get('https://dog.ceo/api/breed/pug/images/random')
    if (pug === undefined || pug.data.status !== 'success') throw 'dogAPI failed';
    return pug.data.message;
  } catch (error) {
    console.error(error);
    return 'pug.png';
  }
}

module.exports = getPug;