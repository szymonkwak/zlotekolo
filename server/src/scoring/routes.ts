import { Router } from 'express';

import { authMiddleware } from './../auth/middleware/authMiddleware';
import { addTrip, getAllTrips } from './handlers/tripHandlers';
import { getAllUsers, getUserMandatoryInfo } from './handlers/userHandlers';

const scoringRouter = Router();
scoringRouter.put('/users', authMiddleware, getUserMandatoryInfo);
scoringRouter.get('/users', authMiddleware, getAllUsers);
scoringRouter.post('/trips', authMiddleware, addTrip);
scoringRouter.get('/trips', authMiddleware, getAllTrips);


export { scoringRouter };
