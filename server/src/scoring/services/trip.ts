import { Destination, Trip } from '@prisma/client';
import dayjs, { Dayjs } from 'dayjs';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';
import dayjsBusinessTime from 'dayjs-business-time';

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(dayjsBusinessTime);
dayjs.tz.setDefault('Europe/Warsaw');

export const parseDateString = (date: string) => dayjs(date);

export const isWeekend = (date: Dayjs) => !date.isBusinessDay();

const isAtTheSameDay = (date: Dayjs, dateToMatch: Date) => date.isSame(dateToMatch, 'day');
const isOfTheSameType = (type: Destination, typeToMatch: Destination) => type === typeToMatch;

export const isTheSameTrip = (date: Dayjs, type: Destination) => (trip: Trip) =>
  isAtTheSameDay(date, trip.dayOfTrip) && isOfTheSameType(type, trip.type);

const maxBusinessDaysToAddTrip: Record<Destination, number> = {
  TO_HOME: 1,
  TO_WORK: 0,
};

export const isItTooLateToAddTrip = (type: Destination, date: Dayjs) => {
  const businessDaysLimit = maxBusinessDaysToAddTrip[type];
  const today = dayjs();
  const diffrence = date.businessDaysDiff(today);

  return diffrence > businessDaysLimit;
};
