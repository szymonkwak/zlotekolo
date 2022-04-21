import { Center, Divider, Paper } from '@mantine/core';
import { useEffect, useState } from 'react';

import { Logo } from '~/components/Logo';

import DisplayDesktop from './subcomponents/Display/DisplayDesktop';
import DisplayMobile from './subcomponents/Display/DisplayMobile';
import { isMoblieView } from './subcomponents/Display/isMobileView';
import UserData from './subcomponents/UserData';

const Main = () => {
  const [mobileView, setMobileView] = useState(false);

  useEffect(() => {
    setMobileView(isMoblieView());

    window.addEventListener('resize', () => setMobileView(isMoblieView()));
    return () => {
      window.removeEventListener('resize', () => setMobileView(isMoblieView()));
    };
  }, [mobileView]);

  return (
    <>
      <Center m="md">
        <Logo />
      </Center>

      <Paper p="xs">
        <UserData />
        <Divider size="sm" />
        {mobileView ? <DisplayMobile /> : <DisplayDesktop />}
      </Paper>
    </>
  );
};

export { Main };
