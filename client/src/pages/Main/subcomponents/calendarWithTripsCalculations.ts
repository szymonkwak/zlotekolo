import dayjs, { Dayjs } from 'dayjs';

import { ListOfTrips } from '~/api/hooks/useMe';

export const tripsAtDay = (trips: ListOfTrips) => {
  if (!trips) return;

  const datesOfTrips = trips.map((trip) => trip.dayOfTrip.slice(0, 10));
  const uniqueTripDates = [...new Set(datesOfTrips)];

  return uniqueTripDates.map((date) => ({
    tripDate: parseDateString(date),
    noOfTrips: datesOfTrips.filter((tripDate) => tripDate === date).length,
  }));
};

export const parseDateString = (date: string) => dayjs(date);

export const isAtTheSameDay = (date: Dayjs, dateToMatch: Date) => date.isSame(dateToMatch, 'day');
