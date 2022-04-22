import { RequestHandler } from 'express';

import { prisma } from '~/common/prisma';

export const addTrip: RequestHandler = async (req, res) => {
  const { date, duration, tripType } = req.body;

  const tripDay = new Date(date);
  const time = new Date(duration);
  const today = getShortDate(new Date().toISOString());
  const dayOfTrip = getShortDate(tripDay.toISOString());

  const alreadyExistTrip = await prisma.user.findUnique({
    where: { email: 'krzy@szt.of' },
    select: { trips: { where: { date: tripDay, type: tripType } } },
  });

  console.log('exist', alreadyExistTrip);

  if (alreadyExistTrip!.trips?.length > 0 && alreadyExistTrip !== null) {
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
    where: { email: 'krzy@szt.of' },
    data: { trips: { create: { date: tripDay, Duration: time, type: tripType } } },
  });

  return res.status(201).send(trip);
};
export const getAllTrips: RequestHandler = async (req, res) => {
  const trip = await prisma.user.findUnique({
    where: { email: 'krzy@szt.of' },
    include: { trips: true },
  });

  return res.send(trip);
};

function getShortDate(dateString: string): string | undefined {
  const result = dateString.split('T')[0]?.split('-')[2];

  return result;
}
