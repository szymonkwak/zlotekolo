import { RequestHandler } from 'express';
import jwt from 'jsonwebtoken';

const ROUTE_AFTER_SUCCESSFUL_LOGIN = process.env.CLIENT_URL;

if (!process.env.SECRET_TOKEN) {
  // eslint-disable-next-line no-console
  console.error('Missing SECRET_TOKEN value');
  process.exit(1);
}

export const googleCallback: RequestHandler = (req, res) => {
  const accessToken = jwt.sign({ userId: req.user?.id }, process.env.SECRET_TOKEN, { expiresIn: '12h' });
  res.cookie('accessToken', accessToken);
  res.redirect(ROUTE_AFTER_SUCCESSFUL_LOGIN);
};
