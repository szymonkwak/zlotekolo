import { RequestHandler } from 'express';
import jwt from 'jsonwebtoken';

const ROUTE_AFTER_SUCCESSFUL_LOGIN = '/';

if (!process.env.SECRET_TOKEN) process.exit(1);

export const googleCallback: RequestHandler = (req, res) => {
  const accessToken = jwt.sign({ data: req.user?.id }, process.env.SECRET_TOKEN!, { expiresIn: '12h' });
  res.header({ accessToken }).redirect(ROUTE_AFTER_SUCCESSFUL_LOGIN);
};
