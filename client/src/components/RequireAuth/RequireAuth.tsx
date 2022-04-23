import { Navigate, Outlet, useLocation } from 'react-router-dom';

import { useMe } from '~/api/hooks/useMe';
import { Paths } from '~/routes/paths';

import { CenteredLoader } from '../Loader/CenteredLoader';

const RequireAuth = () => {
  const user = useMe();
  const location = useLocation();

  if (user.isLoading) return <CenteredLoader />;
  return user.isSuccess ? <Outlet /> : <Navigate to={Paths.Login} state={{ from: location }} replace />;
};

export default RequireAuth;
