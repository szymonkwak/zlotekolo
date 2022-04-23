import { ContractType, Trip, User } from "@prisma/client";

const isBusinesDay = (day: Date) => day.getDay() >= 1 && day.getDay() < 6;
const isSameYear = (a: Date, b: Date) => a.getFullYear() === b.getFullYear();
const isSameMonth = (a: Date, b: Date) => a.getMonth() === b.getMonth();

export const calculateBusinessDays = () => {
  const day = new Date();
  const month = day.getMonth();
  day.setDate(1);
  let businessDays = 0;

  while (day.getMonth() === month) {
    if (isBusinesDay(day)) {
      businessDays += 1;
    }
    day.setDate(day.getDate() + 1);
  }
  return businessDays;
}

export const countTrips = (trips: Trip[]): number => {
  const today = new Date();
  const eligibleTrips = trips.filter((trip) => {
    const tripDate = trip.dayOfTrip;
    return isSameYear(tripDate, today) && isSameMonth(tripDate, today) && isBusinesDay(tripDate)
  });
  return eligibleTrips.length;
}

export const calculateScore = (user: User & { trips: Trip[] }): number => {
  const tripsCount = countTrips(user.trips);

  if (user.contractType === ContractType.FULL_TIME) {
    const totalMonthlyScore = calculateBusinessDays() * 2;
    return tripsCount / totalMonthlyScore;
  } else {
    return tripsCount / 30;
  }
};
