import { Router } from 'express';
import _ from 'lodash';
import Metro from '../metro';
import returnErrorMessage from '../utils/returnErrorMessage';

const lineRouter = Router();

lineRouter.get('', (request, response) => {
  const queryLineNum = request.query.line_num || '01호선';
  const output = _.filter(Metro, { line_num: queryLineNum });
  if (
    request.query.line_num === undefined ||
    queryLineNum === undefined ||
    typeof queryLineNum === 'number' ||
    output === null ||
    output === undefined ||
    _.isEmpty(output)
  ) {
    return response.json(
      JSON.parse(
        returnErrorMessage('GET', '/station', 404, 'Not Found', queryLineNum),
      ),
    );
  }
  return response.json(output);
});

export default lineRouter;
