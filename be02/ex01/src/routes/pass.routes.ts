import { Router } from 'express';

import issueToken from '../auth/issue.auth';
import verifyToken from '../auth/verify.auth';
import { sendIssueResponse, sendVerifyResponse } from '../utils/res.utils';

const passRouter = Router();

passRouter.get('', verifyToken, sendVerifyResponse);
passRouter.post('', issueToken, sendIssueResponse);

export default passRouter;
