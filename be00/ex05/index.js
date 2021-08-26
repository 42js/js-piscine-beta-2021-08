const axios = require('axios');


const fetchRandomImage = async () => {
    try {
        const res = await axios.get("https://dog.ceo/api/breeds/image/random");
        console.log(res.data.message);
        return (res.data.message);
    } catch (e) {
        console.log(e);
        return (null);
    }
};

//api 호출 "https://dog.ceo/api/breeds/image/random"

module.exports = fetchRandomImage;