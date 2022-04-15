import { RequestHandler } from 'express';

import { prisma } from '~/common/prisma';

export const getMe: RequestHandler = async (req, res) => {
  const user = await prisma.user.findUnique({ where: { id: req.user?.id } });
  res.send(user);
};
