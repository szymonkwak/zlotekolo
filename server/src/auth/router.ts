import './handlers/googleAuth';

import { Router } from 'express';
import passport from 'passport';

import { getMe } from './handlers/me';

const authRouter = Router();

authRouter.get('/me', getMe);

authRouter.get('/', passport.authenticate('google', { scope: ['profile', 'email'] }));
authRouter.get('/google/callback', passport.authenticate('google', { successRedirect: '/api/auth/protected', failureRedirect: '/' }));
authRouter.get('/protected', (req, res) => {
  res.send('<h2>Jesteś zalogowany</h2>');
});

export { authRouter };
