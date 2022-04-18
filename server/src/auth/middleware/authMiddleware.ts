import { RequestHandler } from 'express';
import jwt from 'jsonwebtoken';

import { prisma } from '~/common/prisma';

import { TokenContent } from '../typings/TokenContent';

export const authMiddleware: RequestHandler = async (req, res, next) => {
  try {
    const token = req.get('accessToken');
    if (!token) throw new Error();

    const decodedToken = jwt.verify(token, process.env.SECRET_TOKEN) as TokenContent;
    const user = await prisma.user.findUnique({ where: { id: decodedToken.userId } });
    if (!user) throw new Error();
    req.user = user;

    return next();
  } catch (err) {
    res.status(401).send({ message: 'Brak autoryzacji, zaloguj się' });
  }
};
