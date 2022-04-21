import { ContractType,User } from "@prisma/client";


export const calculateScore = (user: User): number => {
  if (user.contractType === ContractType.FULL_TIME) {
    const score = 0;
    return score;
  } else {
    return 1;
  }
};
