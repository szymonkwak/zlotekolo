import { Paper, Text, Title } from '@mantine/core';

import { MeResponse } from '~/api/hooks/useMe';

type UserProps = { user: MeResponse };

const UserSummary = ({ user }: UserProps) => {
  const { score, trips, maxTrips } = user;
  return (
    <Paper withBorder p="md" m="sm">
      <Title order={3} sx={{ marginBottom: 10 }}>
        Podsumowanie:
      </Title>
      <Text>
        Aktualna frekwencja: <strong>{(score * 100).toFixed(2)}%</strong>
      </Text>
      <Text>
        Ilość przejazdów w miesiącu: <strong>{trips}</strong>
      </Text>
      <Text>
        Max liczba przejazdów w miesiącu: <strong>{maxTrips}</strong>
      </Text>
    </Paper>
  );
};

export default UserSummary;
