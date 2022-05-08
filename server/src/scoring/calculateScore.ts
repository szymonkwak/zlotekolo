import { ContractType, Trip, User } from '@prisma/client';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import dayjsBusinessTime from 'dayjs-business-time';

import { holidays } from './services/holidays';

dayjs.extend(customParseFormat);
dayjs.extend(dayjsBusinessTime);
dayjs.setHolidays(holidays);

// const isBusinesDay = (day: Date) => day.getDay() >= 1 && day.getDay() < 6;
const isSameYear = (a: Date, b: Date) => a.getFullYear() === b.getFullYear();
const isSameMonth = (a: Date, b: Date) => a.getMonth() === b.getMonth();

export const calculateBusinessDays = (YYYY_MM = `${dayjs().year()}_${dayjs().month() + 1}`) => {
  if (!dayjs(YYYY_MM, ['YYYY_MM', 'YYYY_M']).isValid()) return -1;
  const date = dayjs(YYYY_MM, ['YYYY_MM', 'YYYY_M']).set('date', 1);

  let businessDays = 0;
  for (let i = 1; i <= date.daysInMonth(); i++) {
    if (date.set('date', i).isBusinessDay()) {
      businessDays++;
    }
  }
  return businessDays;
};

export const countTrips = (trips: Trip[]): number => {
  const today = new Date();
  const eligibleTrips = trips.filter((trip) => {
    const tripDate = trip.dayOfTrip;

    return isSameYear(tripDate, today) && isSameMonth(tripDate, today);
    //  && isBusinesDay(tripDate);
  });
  return eligibleTrips.length;
};

export const calculateScore = (user: User & { trips: Trip[] }): number => {
  const tripsCount = countTrips(user.trips);

  if (user.contractType === ContractType.FULL_TIME) {
    const totalMonthlyScore = calculateBusinessDays() * 2;
    return tripsCount / totalMonthlyScore;
  } else {
    return tripsCount / 30;
  }
};
