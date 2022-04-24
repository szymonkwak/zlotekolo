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
  const { data: user, isFetching, isError } = useMe();
  const navigate = useNavigate();
  const [mobileView, setMobileView] = useState(false);

  useEffect(() => {
    setMobileView(isMoblieView());
    window.addEventListener('resize', () => setMobileView(isMoblieView()));
    return () => {
      window.removeEventListener('resize', () => setMobileView(isMoblieView()));
    };
  }, [mobileView]);

  if (!user || isError) return <ErrorPage />;
  if (isFetching) return <LoaderWithLogo />;
  if (!user?.isConfigured) navigate(Paths.Configuration);

  return (
    <>
      <Center m="md">
        <Logo />
      </Center>

      <Paper p="xs">
        <UserData user={user} />
        <Divider size="sm" />
        {mobileView ? <DisplayMobile user={user} /> : <DisplayDesktop user={user} />}
      </Paper>
    </>
  );
};

export { Main };
