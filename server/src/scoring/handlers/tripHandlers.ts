import { RequestHandler } from 'express';
import { StatusCodes } from 'http-status-codes';

import { prisma } from '~/common/prisma';

import { isItTooLateToAddTrip, isTheSameTrip, isWeekend, parseDateString } from '../services/trip';

export const addTrip: RequestHandler = async (req, res) => {
  const { date: dateString, tripType: type } = req.body;
  const date = parseDateString(dateString);
  const userId = req.user?.id;

  if (isWeekend(date)) return res.status(StatusCodes.BAD_REQUEST).send('W weekend nie pracujemy:)');
  if (isItTooLateToAddTrip(type, date)) return res.status(StatusCodes.BAD_REQUEST).send('Już nie możesz dodać trasy, za poźno');

  const trips = await prisma.trip.findMany({ where: { userId } });
  const tripsAtTheSameDate = trips.filter(isTheSameTrip(date, type));

  if (tripsAtTheSameDate.length > 0) return res.status(StatusCodes.BAD_REQUEST).send('Trasa została dodana wcześniej');

  const trip = await prisma.trip.create({ data: { dayOfTrip: date.toDate(), type, User: { connect: { id: userId } } } });

  return res.status(StatusCodes.CREATED).send(trip);
};
