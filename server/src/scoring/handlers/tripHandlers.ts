import { Destination, Trip } from '@prisma/client';
import dayjs from 'dayjs';
import dayjsBusinessTime from 'dayjs-business-time';
import { RequestHandler } from 'express';
import { StatusCodes } from 'http-status-codes';

import { prisma } from '~/common/prisma';

dayjs.extend(dayjsBusinessTime);

const isWeekend = (date: Date) => date.getDay() === 6 || date.getDay() === 0;

const isAtTheSameDay = (date: Date, dateToMatch: Date) => dayjs(date).isSame(dateToMatch, 'day');
const isOfTheSameType = (type: Destination, typeToMatch: Destination) => type === typeToMatch;
const isTheSameTrip = (date: Date, type: Destination) => (trip: Trip) =>
  isAtTheSameDay(date, trip.dayOfTrip) && isOfTheSameType(type, trip.type);

const maxBusinessDaysToAddTrip: Record<Destination, number> = {
  TO_HOME: 1,
  TO_WORK: 0,
};

const isItTooLateToAddTrip = (type: Destination, date: Date) => {
  const businessDaysLimit = maxBusinessDaysToAddTrip[type];
  const diffrence = dayjs(date).businessDaysDiff(dayjs());

  return diffrence > businessDaysLimit;
};

export const addTrip: RequestHandler = async (req, res) => {
  const { date: dateInMilliseconds, tripType: type } = req.body;
  const date = new Date(dateInMilliseconds);
  const userId = req.user?.id;

  if (isWeekend(date)) return res.status(StatusCodes.BAD_REQUEST).send('W weekend nie pracujemy:)');
  if (isItTooLateToAddTrip(type, date)) return res.status(StatusCodes.BAD_REQUEST).send('Już nie możesz dodać trasy, za poźno');

  const trips = await prisma.trip.findMany({ where: { userId } });
  const tripsAtTheSameDate = trips.filter(isTheSameTrip(date, type));

  if (tripsAtTheSameDate.length > 0) return res.status(StatusCodes.BAD_REQUEST).send('Trasa została dodana wcześniej');

  const trip = await prisma.trip.create({ data: { dayOfTrip: date, type, User: { connect: { id: userId } } } });

  return res.status(StatusCodes.CREATED).send(trip);
};

export const getAllTrips: RequestHandler = async (req, res) => {
  const trip = await prisma.user.findUnique({
    where: { email: req.user?.email },
    include: { trips: true },
  });

  return res.send(trip);
};
