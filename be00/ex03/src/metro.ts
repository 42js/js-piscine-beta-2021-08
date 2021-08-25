import fs from 'fs';

const Metro = JSON.parse(
  fs.readFileSync('./seoul_metro_station.json').toString(),
).DATA;

export default Metro;
