import { axiosClient } from '~/api/axiosClient';

type ReqBody = {
  nickname: string;
  typeOfContract: string | null;
  toWorkDistance: number | undefined;
};

export const putMandatoryInfo = async ({ nickname, typeOfContract, toWorkDistance }: ReqBody) => {
  return await axiosClient.put(`${process.env.VITE_SERVER_URL}/api/scoring/users`, {
    nickname,
    typeOfContract,
    toWorkDistance,
  });
};
