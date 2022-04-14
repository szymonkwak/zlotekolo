import { RequestHandler } from 'express';
import jwt from 'jsonwebtoken';

const ROUTE_AFTER_SUCCESSFUL_LOGIN = '/';

if (!process.env.SECRET_TOKEN) {
  // eslint-disable-next-line no-console
  console.error('Missing SECRET_TOKEN value');
  process.exit(1);
}

export const googleCallback: RequestHandler = (req, res) => {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const accessToken = jwt.sign({ data: req.user?.id }, process.env.SECRET_TOKEN!, { expiresIn: '12h' });
  res.header({ accessToken }).redirect(ROUTE_AFTER_SUCCESSFUL_LOGIN);
};
