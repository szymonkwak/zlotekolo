import { Button } from '@mantine/core';
import { useMe } from '~/api/hooks/useMe';


export const Home = () => {
  const { data } = useMe();

  return <Button>{data?.email}</Button>;
};
