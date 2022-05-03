import { MeResponse } from '~/api/hooks/useMe';

import AddRide from '../subcomponents/AddRide';
import CalendarWithTrips from '../subcomponents/CalendarWithTrips';
import Standings from '../subcomponents/Standings';
import UserSummary from '../subcomponents/UserSummary';

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
