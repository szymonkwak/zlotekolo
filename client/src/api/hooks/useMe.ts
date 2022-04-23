import { useQuery } from 'react-query';

import { axiosClient } from '../axiosClient';
import { QueryKeys } from '../QueryKeys';

export type MeResponse = {
  id: string;
  email: string;
  isConfigured: boolean;
};

const fetchMe = async () => {
  const { data } = await axiosClient.get<MeResponse>('/api/auth/me', {
    headers: {
      accessToken:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJhZWQyYTZhZi1mNmYxLTRmYjktOGM0NS0xZDE3MWU4NmUyMTAiLCJpYXQiOjE2NTA3MTM1ODMsImV4cCI6MTY1MDc1Njc4M30.vFQbCBe9v1o3vSEqJSJsRgRFFMrj7wWVElHCbrXjvgU',
    },
  });
  return data;
};

export const useMe = () => useQuery(QueryKeys.Me, fetchMe);
