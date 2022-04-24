import { Grid } from '@mantine/core';

import { MeResponse } from '~/api/hooks/useMe';

import AddRide from '../AddRide';
import DistanceTimeline from '../DistanceTimeline';
import Standings from '../Standings';
import UserSummary from '../UserSummary';

type UserProps = { user: MeResponse };

const DisplayDesktop = ({ user }: UserProps) => {
  return (
    <Grid gutter="xs">
      <Grid.Col span={5}>
        <AddRide />
        <UserSummary user={user} />
      </Grid.Col>
      <Grid.Col span={2}>
        <DistanceTimeline user={user} />
      </Grid.Col>
      <Grid.Col span={5}>
        <Standings />
      </Grid.Col>
    </Grid>
  );
};

export default DisplayDesktop;
