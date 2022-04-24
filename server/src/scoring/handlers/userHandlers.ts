import { RequestHandler } from 'express';

import { prisma } from '~/common/prisma';

import { calculateScore } from '../calculateScore';
import { validateUser } from './../validations/userValidate';

export const getUserMandatoryInfo: RequestHandler = async (req, res) => {
  const { error } = validateUser(req.body);

  if (error) return res.status(400).send(error.details[0]?.message);

  const { typeOfContract, toWorkDistance, nickname } = req.body;
  const nick = nickname?.length > 0 ? nickname : req.user?.nickname;
  try {
    const user = await prisma.user.update({
      where: { email: req.user?.email },
      data: {
        nickname: nick,
        contractType: typeOfContract,
        toWorkDistance: parseInt(toWorkDistance),
        avatar: req.user?.avatar,
        isConfigured: true,
      },
    });

    res.json(user);
  } catch (error) {
    console.log('error', error);
  }
};

export const getAllUsers: RequestHandler = async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    const trips = await prisma.trip.findMany();
    res.json(users.map((user) => {
      const userTrips = trips.filter((trip) => trip.userId === user.id)
      const score = calculateScore({...user, trips: userTrips});
      return {...user, score}
    }));
  } catch (error) {
    console.log('error', error);
    res.status(400).send('Nie udało się wczytać tablicy wyników')
  }
};
