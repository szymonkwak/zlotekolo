import { Center, Divider, Paper } from '@mantine/core';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useMe } from '~/api/hooks/useMe';
import { CenteredLoader } from '~/components/Loader/CenteredLoader';
import { Logo } from '~/components/Logo';
import { ErrorPage } from '~/pages/Error/ErrorPage';
import { Paths } from '~/routes/paths';

import DisplayDesktop from './subcomponents/Display/DisplayDesktop';
import DisplayMobile from './subcomponents/Display/DisplayMobile';
import { isMoblieView } from './subcomponents/Display/isMobileView';
import UserData from './subcomponents/UserData';

const Main = () => {
  const user = useMe();
  const navigate = useNavigate();
  const [mobileView, setMobileView] = useState(false);

  console.log(user);

  useEffect(() => {
    setMobileView(isMoblieView());
    window.addEventListener('resize', () => setMobileView(isMoblieView()));
    return () => {
      window.removeEventListener('resize', () => setMobileView(isMoblieView()));
    };
  }, [mobileView]);

  if (user.isError) return <ErrorPage />;
  if (!user.data?.isConfigured) navigate(Paths.Configuration);

  return (
    <>
      <Center m="md">
        <Logo />
      </Center>

      {user.isLoading ? (
        <CenteredLoader />
      ) : (
        <Paper p="xs">
          <UserData user={user.data} />
          <Divider size="sm" />
          {mobileView ? <DisplayMobile /> : <DisplayDesktop />}
        </Paper>
      )}
    </>
  );
};

export { Main };
