import { Router } from 'express';

import { authMiddleware } from './../auth/middleware/authMiddleware';
import { addBusinessTrip } from './handlers/businessTripsHandlers';
import { addTrip } from './handlers/tripHandlers';
import { getAllUsers, getUserMandatoryInfo } from './handlers/userHandlers';

const scoringRouter = Router();
scoringRouter.put('/users', authMiddleware, getUserMandatoryInfo);
scoringRouter.get('/users', authMiddleware, getAllUsers);
scoringRouter.post('/trips', authMiddleware, addTrip);
scoringRouter.post('/businesstrips', authMiddleware, addBusinessTrip);

export { scoringRouter };
