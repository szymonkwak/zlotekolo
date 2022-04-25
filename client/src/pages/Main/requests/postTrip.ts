import { axiosClient } from '~/api/axiosClient';

export type TripType = 'TO_WORK' | 'TO_HOME';

type reqBody = {
  tripDate: Date;
  tripType: TripType;
};

export const postTrip = async ({ tripDate, tripType }: reqBody) => {
  return await axiosClient.post('/api/scoring/trips', {
    date: tripDate,
    tripType,
  });
};
