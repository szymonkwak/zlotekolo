import { ContractType, Trip, User } from '@prisma/client';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import dayjsBusinessTime from 'dayjs-business-time';

import { getDateJs, getNowYYYY_MM } from './services/dates';
import { holidays } from './services/holidays';
import { parseDateString } from './services/trip';

dayjs.extend(customParseFormat);
dayjs.extend(dayjsBusinessTime);
dayjs.setHolidays(holidays);

export const calculateBusinessDays = (YYYY_MM = getNowYYYY_MM()) => {
  const date = getDateJs(YYYY_MM);
  if (!date) return -1;

  let businessDays = 0;
  for (let i = 1; i <= date.daysInMonth(); i++) {
    if (date.set('date', i).isBusinessDay()) {
      businessDays++;
    }
  }
  return businessDays;
};

export const countTrips = (trips: Trip[], YYYY_MM = getNowYYYY_MM()) => {
  const date = getDateJs(YYYY_MM);
  const eligibleTrips = trips.filter((trip) => parseDateString(trip.dayOfTrip.toISOString()).isSame(date, 'month'));
  return eligibleTrips.length;
};

export const calculateScore = (user: User & { trips: Trip[] }) => {
  const tripsCount = countTrips(user.trips);

  // TODO Ta część jest do zmiany - możliwość delegacji
  if (user.contractType === ContractType.FULL_TIME) {
    const totalMonthlyScore = calculateBusinessDays() * 2;
    return tripsCount / totalMonthlyScore;
  } else {
    return tripsCount / 30;
  }
};
