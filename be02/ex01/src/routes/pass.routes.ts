import { verify } from 'crypto';
import { Router } from 'express';
import issueToken from '../auth/issue.auth';
import verifyToken from '../auth/verify.auth';

const passRouter = Router();

passRouter.get('', verifyToken);
passRouter.post('', (req, res, next) => {
  issueToken(req, res, next);
  console.log(res.statusCode);
  res.send();
});
// passRouter.post('', (req, res) =>);

export default passRouter;
