import { Paper, Text, Title } from '@mantine/core';

import { MeResponse } from '~/api/hooks/useMe';

type UserProps = { user: MeResponse };

const UserSummary = ({ user }: UserProps) => {
  return (
    <Paper withBorder p="md" m="sm">
      <Title order={3} sx={{ marginBottom: 10 }}>
        Podsumowanie:
      </Title>
      <Text>
        Aktualna frekwencja: <strong>{user.score}%</strong>
      </Text>
      <Text>
        Ilość przejazdów w miesiącu: <strong>{user.trips}</strong>
      </Text>
      <Text>
        Max liczba przejazdów w miesiącu: <strong>{user.maxTrips}</strong>
      </Text>
    </Paper>
  );
};

export default UserSummary;
