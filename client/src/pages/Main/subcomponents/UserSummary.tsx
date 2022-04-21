import { Paper, Text, Title } from '@mantine/core';

const UserSummary = () => {
  return (
    <Paper withBorder p="md" m="sm">
      <Title order={3} sx={{ marginBottom: 10 }}>
        Podsumowanie:
      </Title>
      <Text>Aktualna frekwencja:</Text>
      <Text>Ilość przejazdów w miesiącu:</Text>
      <Text>Max liczba przejazdów w miesiącu:</Text>
    </Paper>
  );
};

export default UserSummary;
