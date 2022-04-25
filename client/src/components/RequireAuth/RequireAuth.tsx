import { Navigate, Outlet, useLocation } from 'react-router-dom';

import { axiosClient } from '~/api/axiosClient';
import { useMe } from '~/api/hooks/useMe';
import { Paths } from '~/routes/paths';

import { LoaderWithLogo } from '../Loader/LoaderWithLogo';

const RequireAuth = () => {
  const user = useMe();
  const location = useLocation();
  const accessToken = window.localStorage.getItem('accessToken');

  if (!accessToken) return <Navigate to={Paths.Login} />;

  axiosClient.defaults.headers.common['accessToken'] = accessToken;

  if (user.isLoading) return <LoaderWithLogo />;
  return user.isSuccess ? <Outlet /> : <Navigate to={Paths.Login} state={{ from: location }} replace />;
};

export { RequireAuth };
