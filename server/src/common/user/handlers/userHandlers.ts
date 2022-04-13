import { RequestHandler } from 'express';

import { prisma } from '~/common/prisma';

export const getUserMandatoryInfo: RequestHandler = async (req, res) => {
  const { username, surname, nickname, contractType, toWorkDistance, email } = req.body;
  const user = await prisma.user.update({ where: { email }, data: { username, surname, nickname, contractType, toWorkDistance } });
  console.log('user', user);

  res.send({ username, surname, nickname, contractType, toWorkDistance, email });
};
export const getAllUsers: RequestHandler = (req, res) => {
  res.send('ok');
};
