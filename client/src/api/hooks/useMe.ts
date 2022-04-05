import { useQuery } from 'react-query';
import { axiosClient } from '../axiosClient';
import { QueryKeys } from '../QueryKeys';

export type MeResponse = {
  id: string;
  email: string;
};

const fetchMe = async () => {
  const { data } = await axiosClient.get<MeResponse>('/api/auth/me');
  return data;
};

export const useMe = () => useQuery(QueryKeys.Me, fetchMe);
