import { Button, Container, Text } from '@mantine/core';
import { useNavigate } from 'react-router-dom';

import { useMe } from '~/api/hooks/useMe';
import { Paths } from '~/routes/paths';

export const Home = () => {
  const { data } = useMe();
  const navigate = useNavigate();
  if (data !== undefined && data.isConfigured !== true) {
    navigate(Paths.Configuration);
  }
  return (
    <Container>
      <Text size="xl" color="bright-pink">
        Theme
      </Text>
      <Button>{data?.email}</Button>
    </Container>
  );
};
