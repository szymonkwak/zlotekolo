import dayjs from 'dayjs';
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore';
import dayjsBusinessTime from 'dayjs-business-time';
import { RequestHandler } from 'express';
import { StatusCodes } from 'http-status-codes';

import { prisma } from '~/common/prisma';

import { holidays } from '../services/holidays';
import { parseDateString } from '../services/trip';

dayjs.extend(isSameOrBefore);
dayjs.extend(dayjsBusinessTime);
dayjs.setHolidays(holidays);

export const addBusinessTrip: RequestHandler = async (req, res) => {
  console.log(req.body);
  const { from, to } = req.body;

  let duration = 0;
  const businessTripDates: Date[] = [];

  let loopDate = parseDateString(from);
  while (loopDate.isSameOrBefore(parseDateString(to))) {
    if (loopDate.isBusinessDay()) {
      duration++;
      businessTripDates.push(loopDate.toDate());
    }
    loopDate = loopDate.add(1, 'day');
  }
  console.log(duration);
  console.log(businessTripDates);

  const businessTrip = await prisma.bussinesTrip.create({
    data: {
      dates: businessTripDates,
      duration,
    },
  });

  return res.status(StatusCodes.CREATED).send(businessTrip);
};
