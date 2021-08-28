import express from 'express';

import * as auth from './auth/auth';

const accountRouter = express.Router();

accountRouter.use('/login', auth.postLogin);
accountRouter.use('/logout', auth.getLoout);
accountRouter.use('/signup', auth.postSignup);
accountRouter.use('/changepassword', auth.postChangePassword);

export default accountRouter;
