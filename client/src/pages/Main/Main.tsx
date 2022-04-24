import { Center, Divider, Paper } from '@mantine/core';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useMe } from '~/api/hooks/useMe';
import { LoaderWithLogo } from '~/components/Loader/LoaderWithLogo';
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
  if (user.isLoading) return <LoaderWithLogo />;
  if (!user.data?.isConfigured) navigate(Paths.Configuration);
  if (user.isSuccess) {
    return (
      <>
        <Center m="md">
          <Logo />
        </Center>

        <Paper p="xs">
          <UserData user={user.data} />
          <Divider size="sm" />
          {mobileView ? <DisplayMobile user={user.data} /> : <DisplayDesktop user={user.data} />}
        </Paper>
      </>
    );
  }

  //Default render
  return (
    <Center m="md">
      <Logo />
    </Center>
  );
};

export { Main };
