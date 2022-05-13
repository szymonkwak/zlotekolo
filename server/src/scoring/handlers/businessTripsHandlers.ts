import dayjs from 'dayjs';
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore';
import dayjsBusinessTime from 'dayjs-business-time';
import { RequestHandler } from 'express';
import { StatusCodes } from 'http-status-codes';

import { prisma } from '~/common/prisma';

import { businessTripAlreadyExsists } from '../services/businessTrips';
import { holidays } from '../services/holidays';
import { parseDateString } from '../services/trip';

dayjs.extend(isSameOrBefore);
dayjs.extend(dayjsBusinessTime);
dayjs.setHolidays(holidays);

export const addBusinessTrip: RequestHandler = async (req, res) => {
  const { from: fromString, to: toString } = req.body;
  const from = parseDateString(fromString);
  const to = parseDateString(toString);

  let duration = 0;
  const businessTripDates: Date[] = [];

  let loopDate = from;
  while (loopDate.isSameOrBefore(to)) {
    if (loopDate.isBusinessDay()) {
      duration++;
      businessTripDates.push(loopDate.toDate());
    }
    loopDate = loopDate.add(1, 'day');
  }

  if (await businessTripAlreadyExsists(businessTripDates, req.user!))
    return res.status(StatusCodes.BAD_REQUEST).send('Data pokrywa się z zapisaną już wcześniej delegacją.');

  const businessTrip = await prisma.bussinesTrip.create({
    data: {
      dates: businessTripDates,
      duration,
      userId: req.user?.id,
    },
  });
  return res.status(StatusCodes.CREATED).send(businessTrip);
};
