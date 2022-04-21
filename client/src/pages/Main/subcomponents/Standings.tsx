import { Paper, Table, Title, useMantineTheme } from '@mantine/core';

const elements = [
  { position: 1, points: '12%', nickname: 'Borowka' },
  { position: 2, points: '14%', nickname: 'Tysia' },
  { position: 3, points: '88%', nickname: 'Mimigo' },
  { position: 4, points: '13%', nickname: 'Kaffan' },
  { position: 5, points: '14%', nickname: 'Eriko' },
  { position: 6, points: '54%', nickname: 'Benio' },
  { position: 7, points: '81%', nickname: 'Kalarepka' },
  { position: 8, points: '36%', nickname: 'Farfocel' },
  { position: 9, points: '46%', nickname: 'Zdzich' },
  { position: 10, points: '75%', nickname: 'Jarzyna' },
];

const rows = elements.map((element) => (
  <tr key={element.nickname}>
    <td>{element.nickname}</td>
    <td>{element.position}</td>
    <td>{element.points}</td>
  </tr>
));

const Standings = () => {
  const theme = useMantineTheme();
  return (
    <Paper withBorder p="sm" m="sm">
      <Title order={3} sx={{ marginBottom: 10 }}>
        Ranking:
      </Title>
      <Paper radius="xs" withBorder sx={{ backgroundColor: theme.colors.gray[0] }}>
        <Table highlightOnHover verticalSpacing="xs" fontSize="md">
          <thead>
            <tr>
              <th>Pseudonim</th>
              <th>Miejsce</th>
              <th>Frekwencja</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </Table>
      </Paper>
    </Paper>
  );
};

export default Standings;
