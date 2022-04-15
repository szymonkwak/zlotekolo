import { RequestHandler } from 'express';
import jwt from 'jsonwebtoken';

import { prisma } from '~/common/prisma';

export const authMiddleware: RequestHandler = async (req, res, next) => {
  try {
    const token = req.get('accessToken');
    if (!token) throw new Error();

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const decodedToken = jwt.verify(token, process.env.SECRET_TOKEN!);
    const user = await prisma.user.findUnique({ where: { id: (decodedToken as { data: string }).data } });
    if (!user) throw new Error();
    req.user = user;

    return next();
  } catch (err) {
    res.status(401).send({ message: 'Brak autoryzacji, zaloguj się' });
  }
};
