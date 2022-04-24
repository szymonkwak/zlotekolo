import { Box, Center, Image, Title } from '@mantine/core';

import { Logo } from '../../components/Logo';
import brokenBike from './brokenBike.jpg';

const ErrorPage = () => {
  return (
    <>
      <Center pb="xl" m="xl">
        <Logo />
      </Center>
      <Box p="xl" sx={{ display: 'flex', gap: 20, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <Title order={1}>404</Title>
        <Image src={brokenBike} alt="brokenBike" sx={{ maxWidth: 300 }} />
        <Title order={3}>Ops! Coś poszło nie tak</Title>
      </Box>
    </>
  );
};

export { ErrorPage };
