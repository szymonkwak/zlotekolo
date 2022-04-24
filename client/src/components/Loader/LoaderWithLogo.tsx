import { Center, Loader } from '@mantine/core';

import { Logo } from '../Logo';

const LoaderWithLogo = () => {
  return (
    <>
      <Center m="md">
        <Logo />
      </Center>
      <Center style={{ height: 200 }}>
        <Loader size="lg" />
      </Center>
    </>
  );
};

export { LoaderWithLogo };
