import './handlers/googleAuth';

import { Router } from 'express';
import passport from 'passport';

import { getMe } from './handlers/me';

const ROUTE_AFTER_SUCCESSFUL_LOGIN = '/api/auth/protected';
const ROUTE_AFTER_FAILURE = '/kupa';

const authRouter = Router();

authRouter.get('/me', getMe);

authRouter.get('/', passport.authenticate('google', { scope: ['profile', 'email'] }));
authRouter.get('/google/callback', passport.authenticate('google', { session: false }), (req, res) => {
  // It is here !
  console.log(req.user);
  res.redirect(ROUTE_AFTER_SUCCESSFUL_LOGIN);
});
authRouter.get('/protected', (req, res) => {
  // And here is gone
  console.log('protec: ' + req.user);
  res.send('<h2>Jesteś zalogowany</h2>');
});

export { authRouter };
