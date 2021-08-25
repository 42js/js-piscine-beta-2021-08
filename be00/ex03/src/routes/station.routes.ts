import { Router } from 'express';
import _ from 'lodash';
import Metro from '../metro';
import returnErrorMessage from '../utils/returnErrorMessage';

console.log(Metro);

const stationRouter = Router();
const engRegExp = /^[a-zA-Z][a-zA-Z0-9 -]+$/;

stationRouter.get('/:name', (request, response) => {
  let output;
  if (request.params.name.match(engRegExp)) {
    console.log(request.params.name);
    output = _.find(Metro, { station_nm_eng: request.params.name });
  } else output = _.find(Metro, { station_nm: request.params.name });
  if (
    request.params.name.length === 0 ||
    request.params.name === undefined ||
    output === undefined ||
    output === ''
  ) {
    return response.json(
      JSON.parse(
        returnErrorMessage(
          'GET',
          '/station',
          404,
          'Not Found',
          request.params.name,
        ),
      ),
    );
  }
  return response.json(output);
});

stationRouter.post('/id', (request, response) => {
  const frCode = request.body.fr_code;
  const output = _.find(Metro, { fr_code: frCode });
  if (
    request.body.fr_code === null ||
    request.body.fr_code.length === 0 ||
    request.body.fr_code === undefined ||
    output === undefined
  ) {
    return response.json(
      JSON.parse(
        returnErrorMessage('POST', '/station', 404, 'Not Found', request.body),
      ),
    );
  }
  return response.json(output);
});

export default stationRouter;
