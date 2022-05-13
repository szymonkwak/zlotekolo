import { User } from '@prisma/client';

import { prisma } from '~/common/prisma';

import { parseDateString } from './trip';

export const businessTripAlreadyExsists = async (dates: Date[], user: User) => {
  const businessTrips = await prisma.bussinesTrip.findMany({ where: { userId: user.id } });

  let alreadyExist = false;
  businessTrips.map((trip) => {
    trip.dates.map((existingDate) => {
      dates.map((date) => {
        if (parseDateString(date.toISOString()).isSame(parseDateString(existingDate.toISOString()))) alreadyExist = true;
      });
    });
  });

  return alreadyExist;
};
