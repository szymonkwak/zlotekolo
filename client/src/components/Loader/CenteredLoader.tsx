import { Center, Loader } from '@mantine/core';

const CenteredLoader = () => {
  return (
    <Center style={{ height: 200 }}>
      <Loader size="lg" />
    </Center>
  );
};

export { CenteredLoader };
