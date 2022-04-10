import { Button, Container, Text } from '@mantine/core';
import { useMe } from '~/api/hooks/useMe';


export const Home = () => {
  const { data } = useMe();

  return (
    <Container>
      <Text size="xl" color="bright-pink">Theme</Text>
      <Button>{data?.email}</Button>
    </Container>
  );
};
