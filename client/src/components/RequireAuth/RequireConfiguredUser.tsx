import { Navigate, Outlet, useLocation } from 'react-router-dom';

import { MeResponse } from '~/api/hooks/useMe';
import { Paths } from '~/routes/paths';

const RequireConfiguredUser = (user: MeResponse) => {
  const location = useLocation();

  return user.isConfigured ? <Outlet /> : <Navigate to={Paths.Configuration} state={{ from: location }} replace />;
};

export { RequireConfiguredUser };
