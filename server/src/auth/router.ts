import './handlers/googleAuth';

import { Router } from 'express';
import jwt from 'jsonwebtoken';
import passport from 'passport';

import { getMe } from './handlers/me';

const ROUTE_AFTER_SUCCESSFUL_LOGIN = '/api/auth/protected';

const authRouter = Router();

authRouter.get('/me', getMe);

authRouter.get('/', passport.authenticate('google', { scope: ['profile', 'email'] }));
authRouter.get('/google/callback', passport.authenticate('google', { session: false }), (req: any, res) => {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const accessToken = jwt.sign({ data: req.user.id }, process.env.SECRET_TOKEN!, { expiresIn: '12h' });
  res.send({ accessToken });
  res.redirect(ROUTE_AFTER_SUCCESSFUL_LOGIN);
});
authRouter.get('/protected', (req, res) => {
  res.send('<h2>Jesteś zalogowany</h2>');
});

export { authRouter };
