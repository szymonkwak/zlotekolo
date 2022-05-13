import { MeResponse } from '~/api/hooks/useMe';

import AddRide from '../components/AddRide';
import BusinessTrip from '../components/BusinessTrip';
import CalendarWithTrips from '../components/CalendarWithTrips';
import Standings from '../components/Standings';
import UserSummary from '../components/UserSummary';

type UserProps = { user: MeResponse };

const DisplayMobile = ({ user }: UserProps) => {
  return (
    <>
      <AddRide />
      <UserSummary user={user} />
      <BusinessTrip />
      <CalendarWithTrips user={user} />
      <Standings user={user} />
    </>
  );
};

export default DisplayMobile;
