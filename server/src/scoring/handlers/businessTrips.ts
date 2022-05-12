import dayjs from 'dayjs';
import dayjsBusinessTime from 'dayjs-business-time';
import { RequestHandler } from 'express';
import { StatusCodes } from 'http-status-codes';

import { prisma } from '~/common/prisma';

import { holidays } from '../services/holidays';
import { parseDateString } from '../services/trip';

dayjs.extend(dayjsBusinessTime);
dayjs.setHolidays(holidays);

export const addBusinessTrip: RequestHandler = async (req, res) => {
  console.log(req.body);
  const { from, to } = req.body;

  let duration = 1;

  if (to) {
    let loopDate = parseDateString(from);
    while (loopDate.isBefore(parseDateString(to))) {
      if (loopDate.isBusinessDay()) duration++;
      loopDate = loopDate.add(1, 'day');
    }
  }
  console.log(duration);

  const businessTrip = await prisma.bussinesTrip.create({
    data: {
      from: parseDateString(from).toDate(),
      to: to ? parseDateString(to).toDate() : parseDateString(from).toDate(),
      duration,
    },
  });

  return res.status(StatusCodes.CREATED).send(businessTrip);
};
