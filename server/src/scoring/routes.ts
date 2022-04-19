import { Router } from 'express';

import { getAllUsers, getUserMandatoryInfo } from './handlers/userHandlers';

const userRouter = Router();

userRouter.route('/').post(getUserMandatoryInfo).get(getAllUsers);

export { userRouter };
