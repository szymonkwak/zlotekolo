import { useMe } from '~/api/hooks/useMe';

export const Home = () => {
  const { data } = useMe();

  return <>{data?.email}</>;
};
