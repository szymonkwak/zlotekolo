import { RequestHandler } from 'express';

import { prisma } from '~/common/prisma';

import { validateUser } from './../validations/userValidate';

export const getUserMandatoryInfo: RequestHandler = async (req, res) => {
  const { error } = validateUser(req.body);

  if (error) return res.status(400).send(error.details[0]?.message);

  const { contractType, toWorkDistance, nickname } = req.body;
  const nick = nickname?.length > 0 ? nickname : req.user?.nickname;
  const user = await prisma.user.update({
    where: { email: req.user?.email },
    data: {
      nickname: nick,
      contractType,
      toWorkDistance,
      avatar: req.user?.avatar,
      isConfigured: true,
    },
  });
  res.json(user);
};
