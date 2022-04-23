import { RequestHandler, Router } from 'express';

import { prisma } from '~/common/prisma';

const usersRouter = Router();

const getAllUsers: RequestHandler = async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    res.json(users);
  } catch (error) {
    console.log('error', error);
  }
};

usersRouter.get('/', getAllUsers);
export { usersRouter };
