import { axiosClient } from '~/api/axiosClient';

type reqBody = {
  from: Date;
  to?: Date;
};

export const postBusinessTrip = async ({ from, to }: reqBody) => {
  return await axiosClient.post('/api/scoring/businesstrips', {
    from,
    to,
  });
};
