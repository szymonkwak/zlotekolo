import { MeResponse } from '~/api/hooks/useMe';

import AddRide from '../AddRide';
import Standings from '../Standings';
import UserSummary from '../UserSummary';

type UserProps = { user: MeResponse };

const DisplayMobile = ({ user }: UserProps) => {
  return (
    <>
      <AddRide />
      <UserSummary user={user} />
      <Standings user={user} />
    </>
  );
};

export default DisplayMobile;
