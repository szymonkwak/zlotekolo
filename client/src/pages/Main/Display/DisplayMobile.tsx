import { MeResponse } from '~/api/hooks/useMe';

import AddRide from '../components/AddRide';
import CalendarWithTrips from '../components/CalendarWithTrips';
import Standings from '../components/Standings';
import UserSummary from '../components/UserSummary';

type UserProps = { user: MeResponse };

const DisplayMobile = ({ user }: UserProps) => {
  return (
    <>
      <AddRide />
      <UserSummary user={user} />
      <CalendarWithTrips user={user} />
      <Standings user={user} />
    </>
  );
};

export default DisplayMobile;
