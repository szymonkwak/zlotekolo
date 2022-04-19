import { RequestHandler } from 'express';

import { prisma } from '~/common/prisma';

import { validateUser } from './../validations/userValidate';

export const getUserMandatoryInfo: RequestHandler = async (req, res) => {
  const { error } = validateUser(req.body);
  console.log('user', req.user);

  if (error) return res.status(400).send(error.details[0]?.message);

  const { username, surname, nickname, contractType, toWorkDistance, email, avatar } = req.body;

  const user = await prisma.user.upsert({
    where: { email },
    update: { username, surname, nickname, contractType, toWorkDistance, avatar },
    create: { username, surname, nickname, contractType, toWorkDistance, email, avatar },
  });
  res.json(user);
};
export const getAllUsers: RequestHandler = (req, res) => {
  res.send('ok');
};
