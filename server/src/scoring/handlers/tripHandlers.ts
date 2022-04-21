import { RequestHandler } from 'express';

import { prisma } from '~/common/prisma';

export const addTrip: RequestHandler = async (req, res) => {
  const { date, duration, tripType } = req.body;
  console.log('body', date, duration, tripType);
  const dateTime = new Date(date);
  const time = new Date(duration);
  console.log('time', dateTime, time);

  const trip = await prisma.user.update({
    where: { email: 'krzy@szt.of' },
    data: { trips: { create: { date: dateTime, Duration: time, type: tripType } } },
  });

  return res.json(trip);
};
export const getAllTrips: RequestHandler = async (req, res) => {
  const trip = await prisma.user.findUnique({
    where: { email: 'krzy@szt.of' },
    include: { trips: true },
  });

  return res.json(trip);
};
