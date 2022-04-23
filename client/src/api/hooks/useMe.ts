import { useQuery } from 'react-query';

import { getCookie } from '~/utils/getCookie';

import { axiosClient } from '../axiosClient';
import { QueryKeys } from '../QueryKeys';

export type MeResponse = {
  id: string;
  username: string;
  nickname: string;
  email: string;
  avatar: string;
  contractType: string;
  isConfigured: boolean;
  toWorkDistance: number;
  trips: Array<unknown>;
};

const fetchMe = async () => {
  const { data } = await axiosClient.get<MeResponse>('/api/auth/me', {
    headers: {
      accessToken: getCookie('accessToken'),
    },
  });
  return data;
};

export const useMe = () => useQuery(QueryKeys.Me, fetchMe);
