import { Grid } from '@mantine/core';

import AddRide from '../AddRide';
import DistanceTimeline from '../DistanceTimeline';
import Standings from '../Standings';
import UserSummary from '../UserSummary';

const DisplayDesktop = () => {
  return (
    <Grid gutter="xs">
      <Grid.Col span={5}>
        <AddRide />
        <UserSummary />
      </Grid.Col>
      <Grid.Col span={2}>
        <DistanceTimeline />
      </Grid.Col>
      <Grid.Col span={5}>
        <Standings />
      </Grid.Col>
    </Grid>
  );
};

export default DisplayDesktop;
