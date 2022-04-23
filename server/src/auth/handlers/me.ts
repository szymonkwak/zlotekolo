import { RequestHandler } from 'express';
import { Trip, User } from '@prisma/client';
import { calculateScore, calculateBusinessDays, countTrips } from '~/scoring/calculateScore';

const getTotalDistance = (user: User & { trips: Trip[] }): number => {
  return user.toWorkDistance * user.trips.length;
}

export const getMe: RequestHandler = (req, res) => {
  const user: User & { trips: Trip[] } = req.user as any;

  const score = calculateScore(user);

  res.send({
    ...user,
    score,
    trips: countTrips(user.trips),
    maxTrips: calculateBusinessDays() * 2,
    totalDistance: getTotalDistance(user),
    totalMonthDistance: score * user.toWorkDistance,
  });
};
