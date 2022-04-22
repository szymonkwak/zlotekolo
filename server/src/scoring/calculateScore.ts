import { ContractType, User, Point } from "@prisma/client";


const calculateBusinessDays = () => {
  const day = new Date();
  const month = day.getMonth();
  day.setDate(1);
  let businessDays = 0;

  while (day.getMonth() === month) {
    if (day.getDay() >= 1 && day.getDay() < 6) {
      businessDays += 1;
    }

    day.setDate(day.getDate() + 1);
  }
  return businessDays;
}

export const calculateScore = (user: User & { points: Point[] }): number => {

  const today = new Date();



  if (user.contractType === ContractType.FULL_TIME) {
    const filterPoints = user.points.filter((point) => {

      const date = point.scoredAt;

      if (date.getFullYear() === today.getFullYear() && date.getMonth() === today.getMonth() && (date.getDay() >= 1 && date.getDay() < 6)) {

      }
    })
  })

  return score;
} else {
  return 1;
  }
};
