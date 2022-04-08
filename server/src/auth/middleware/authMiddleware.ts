import { RequestHandler } from 'express';
import jwt from 'jsonwebtoken';

import { prisma } from '~/common/prisma';

export const authMiddleware: RequestHandler = async (req, res, next) => {
  const accessToken = req.cookies['access-token'];

  const payload = jwt.verify(accessToken, process.env.SECRET_TOKEN);

  const user = await prisma.user.findUnique({ where: { id: payload._id } });

  if (!user) {
    res.sendStatus(401);
  } else {
    req.user = user;
    return next();
  }
};
