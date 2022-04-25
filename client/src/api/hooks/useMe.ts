import { useQuery } from 'react-query';

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
  maxTrips: number;
  score: number;
  totalDistance: number;
  totalMonthDistance: number;
};

const fetchMe = async () => {
  const { data } = await axiosClient.get<MeResponse>('/api/auth/me');
  return data;
};

export const useMe = () => useQuery(QueryKeys.Me, fetchMe, { retry: 0 });
