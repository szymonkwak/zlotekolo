import { Box, Center, Divider, Paper } from '@mantine/core';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useMe } from '~/api/hooks/useMe';
import { LoaderWithLogo } from '~/components/Loader/LoaderWithLogo';
import { Logo } from '~/components/Logo';
import { LogoutButton } from '~/components/LogoutButton/LogoutButton';
import { ErrorPage } from '~/pages/Error/ErrorPage';
import { Paths } from '~/routes/paths';

import UserData from './components/UserData';
import DisplayDesktop from './Display/DisplayDesktop';
import DisplayMobile from './Display/DisplayMobile';
import { isMoblieView } from './Display/isMobileView';

const Main = () => {
  const { data: user, isLoading, isError } = useMe();
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
  if (isLoading) return <LoaderWithLogo />;
  if (!user?.isConfigured) navigate(Paths.Configuration);

  return (
    <>
      <Center m="md">
        <Logo />
      </Center>

      <Paper p="xs">
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <UserData user={user} />
          <LogoutButton />
        </Box>
        <Divider size="sm" />
        {mobileView ? <DisplayMobile user={user} /> : <DisplayDesktop user={user} />}
      </Paper>
    </>
  );
};

export { Main };
