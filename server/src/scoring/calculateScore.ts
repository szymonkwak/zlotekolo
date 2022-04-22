import { ContractType, Point,User } from "@prisma/client";

const isBusinesDay = (day: Date) => day.getDay() >= 1 && day.getDay() < 6;
const isSameYear = (a: Date, b: Date) => a.getFullYear() === b.getFullYear();
const isSameMonth = (a: Date, b: Date) => a.getMonth() === b.getMonth();

const calculateBusinessDays = () => {
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

const countPoints = (points: Point[]): number => {
  const today = new Date();
  const eligiblePoints = points.filter((point) => {
    const tripDate = point.scoredAt;
    return isSameYear(tripDate, today) && isSameMonth(tripDate, today) && isBusinesDay(tripDate)
  });
  return eligiblePoints.length;
}

export const calculateScore = (user: User & { points: Point[] }): number => {
  const scoredPoints = countPoints(user.points);

  if (user.contractType === ContractType.FULL_TIME) {
    const totalMonthlyScore = calculateBusinessDays() * 2;
    return scoredPoints / totalMonthlyScore;
  } else {
    return scoredPoints / 30;
  }
};
