import { UseQueryResult } from 'react-query';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

import { MeResponse, useMe } from '~/api/hooks/useMe';
import { Paths } from '~/routes/paths';

import { CenteredLoader } from '../Loader/CenteredLoader';

// let user: UseQueryResult<MeResponse, unknown>;

const RequireAuth = () => {
  const user = useMe();
  const location = useLocation();

  if (user.isLoading) return <CenteredLoader />;
  return user.isSuccess ? <Outlet /> : <Navigate to={Paths.Login} state={{ from: location }} replace />;
  //   if (user.isSuccess) {
  //     return user.data.isConfigured ? <Outlet /> : <Navigate to={Paths.Configuration} state={{ from: location }} replace />;
  //   } else {
  //     return <Navigate to={Paths.Login} state={{ from: location }} replace />;
  //   }
};

export { RequireAuth };
