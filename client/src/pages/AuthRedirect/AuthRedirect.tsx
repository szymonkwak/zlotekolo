import { Navigate, useSearchParams } from 'react-router-dom';

import { axiosClient } from '~/api/axiosClient';
import { Paths } from '~/routes/paths';

export const AuthRedirect = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const accessToken = searchParams.get('accessToken');
  setSearchParams('');

  if (!accessToken) {
    return <Navigate to={Paths.ErrorPage} />;
  }

  window.localStorage.setItem('accessToken', accessToken);
  axiosClient.defaults.headers.common['accessToken'] = accessToken;
  return <Navigate to={Paths.Home} />;
};
