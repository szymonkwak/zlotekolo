import { Router } from 'express';

import { getMe } from './handlers/me';

const authRouter = Router();

authRouter.get('/me', getMe);

export { authRouter };
