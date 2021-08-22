const jwt = require('jsonwebtoken');
const token = jwt.sign({ username: 'iha9704'}, 'secret_key');

console.log(token);

const decoded_data = jwt.verify(token, 'secret_key');
console.log(decoded_data);