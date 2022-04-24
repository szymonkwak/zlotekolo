import { Navigate, Outlet, useLocation } from 'react-router-dom';

import { useMe } from '~/api/hooks/useMe';
import { Paths } from '~/routes/paths';

import { LoaderWithLogo } from '../Loader/LoaderWithLogo';

const RequireAuth = () => {
  const user = useMe();
  const location = useLocation();

  if (user.isLoading) return <LoaderWithLogo />;
  return user.isSuccess ? <Outlet /> : <Navigate to={Paths.Login} state={{ from: location }} replace />;
};

export { RequireAuth };
