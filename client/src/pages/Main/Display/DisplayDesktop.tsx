import { Grid } from '@mantine/core';

import { MeResponse } from '~/api/hooks/useMe';

import AddRide from '../subcomponents/AddRide';
import CalendarWithTrips from '../subcomponents/CalendarWithTrips';
import DistanceTimeline from '../subcomponents/DistanceTimeline';
import Standings from '../subcomponents/Standings';
import UserSummary from '../subcomponents/UserSummary';

type UserProps = { user: MeResponse };

const DisplayDesktop = ({ user }: UserProps) => {
  return (
    <Grid gutter="xs">
      <Grid.Col span={5}>
        <AddRide />
        <UserSummary user={user} />
        <CalendarWithTrips />
      </Grid.Col>
      <Grid.Col span={2}>
        <DistanceTimeline user={user} />
      </Grid.Col>
      <Grid.Col span={5}>
        <Standings user={user} />
      </Grid.Col>
    </Grid>
  );
};

export default DisplayDesktop;
