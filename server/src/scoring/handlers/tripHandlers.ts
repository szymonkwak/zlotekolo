import { RequestHandler } from 'express';

import { prisma } from '~/common/prisma';

export const addTrip: RequestHandler = async (req, res) => {
  const { date, tripType } = req.body;

  const tripDay = new Date(date);
  const today = getShortDate(new Date().toISOString());
  const dayOfTrip = getShortDate(tripDay.toISOString());

  const alreadyExistTrip = await prisma.user.findUnique({
    where: { email: req.user?.email },
    select: { trips: { where: { dayOfTrip: tripDay, type: tripType } } },
  });

  console.log('exist', alreadyExistTrip);

  if (alreadyExistTrip !== null && alreadyExistTrip.trips?.length > 0) {
    return res.status(400).send('trip for this day already exist');
  }

  if (tripType.includes('TO_WORK')) {
    if (today !== dayOfTrip) {
      return res.status(400).send('too late!');
    }
  }

  if (tripType.includes('TO_HOME')) {
    const prevDay = parseInt(today!) - 1;
    if (today !== dayOfTrip && dayOfTrip !== prevDay.toString()) {
      return res.status(400).send('too late!');
    }
  }

  const trip = await prisma.user.update({
    where: { email: req.user?.email },
    data: { trips: { create: { dayOfTrip: tripDay, type: tripType, createdAt: new Date().toISOString() } } },
  });

  return res.status(201).send(trip);
};
export const getAllTrips: RequestHandler = async (req, res) => {
  const trip = await prisma.user.findUnique({
    where: { email: req.user?.email },
    include: { trips: true },
  });

  return res.send(trip);
};

function getShortDate(dateString: string): string | undefined {
  const result = dateString.split('T')[0]?.split('-')[2];

  return result;
}
