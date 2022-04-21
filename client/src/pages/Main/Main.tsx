import { Divider, Paper } from '@mantine/core';

import AddRide from './subcomponents/AddRide';
import DistanceTimeline from './subcomponents/DistanceTimeline';
import Standings from './subcomponents/Standings';
import UserData from './subcomponents/UserData';

const Main = () => {
  return (
    <>
      <Paper p="xs">
        <UserData />
        <Divider size="sm" />
        <AddRide />
        <Divider size="sm" />
        <DistanceTimeline />
        <Divider size="sm" />
        <Standings />
      </Paper>
    </>
  );
};

export { Main };
