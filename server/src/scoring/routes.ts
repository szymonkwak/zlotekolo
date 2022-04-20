import { Router } from 'express';

import { authMiddleware } from './../auth/middleware/authMiddleware';
import { getUserMandatoryInfo } from './handlers/userHandlers';

const scoringRouter = Router();
scoringRouter.put('/users', authMiddleware, getUserMandatoryInfo);

export { scoringRouter };
