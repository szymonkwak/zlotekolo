import { MeResponse } from '~/api/hooks/useMe';

export const timelineBulletValues = (user: MeResponse, noOfBullets: number) => {
  const bulletsValues: string[] = [];
  for (let i = 1; i <= noOfBullets; i++) {
    const value = ((user.toWorkDistance * user.maxTrips) / noOfBullets) * i;
    bulletsValues.push(`${value.toString().slice(0, -3)} km`);
  }
  return bulletsValues;
};

export const noOfSelectedBullets = (user: MeResponse, noOfBullets: number) => {
  const firstBulletInMeters = parseInt(timelineBulletValues(user, noOfBullets)[0].slice(0, -3)) * 1000;
  return Math.floor(user.totalMonthDistance / firstBulletInMeters) - 1;
};
