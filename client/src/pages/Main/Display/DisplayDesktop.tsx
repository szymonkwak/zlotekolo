import { Grid } from '@mantine/core';

import { MeResponse } from '~/api/hooks/useMe';

import AddRide from '../components/AddRide';
import BusinessTrip from '../components/BusinessTrip';
import CalendarWithTrips from '../components/CalendarWithTrips';
import DistanceTimeline from '../components/DistanceTimeline';
import Standings from '../components/Standings';
import UserSummary from '../components/UserSummary';

type UserProps = { user: MeResponse };

const DisplayDesktop = ({ user }: UserProps) => {
  return (
    <Grid gutter="xs">
      <Grid.Col span={5}>
        <AddRide />
        <BusinessTrip />
        <Standings user={user} />
      </Grid.Col>
      <Grid.Col span={5}>
        <UserSummary user={user} />
        <CalendarWithTrips user={user} />
      </Grid.Col>
      <Grid.Col span={2}>
        <DistanceTimeline user={user} />
      </Grid.Col>
    </Grid>
  );
};

export default DisplayDesktop;
