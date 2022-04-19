import { Router } from 'express';

import { authMiddleware } from './../auth/middleware/authMiddleware';
import { getUserMandatoryInfo } from './handlers/userHandlers';

const userRouter = Router();
userRouter.put('/users', authMiddleware, getUserMandatoryInfo);

export { userRouter };
