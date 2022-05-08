import { Trip, User } from '@prisma/client';
import { RequestHandler } from 'express';

import { prisma } from '~/common/prisma';
import { calculateBusinessDays, calculateScore, countTrips } from '~/scoring/calculateScore';

export const getMe: RequestHandler = async (req, res) => {
  const trips = await prisma.trip.findMany({
    where: {
      userId: req.user?.id,
    },
  });
  const user: User & { trips: Trip[] } = { ...(req.user as User), trips };

  const score = calculateScore(user);

  res.send({
    ...user,
    score,
    listOfTrips: trips,
    trips: countTrips(user.trips),
    maxTrips: calculateBusinessDays() * 2,
    totalMonthDistance: countTrips(user.trips) * user.toWorkDistance,
  });
};
