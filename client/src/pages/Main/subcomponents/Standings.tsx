import { Paper, Table, Title, useMantineTheme } from '@mantine/core';

const elements = [
  { position: 1, points: 12, nickname: 'Borowka' },
  { position: 2, points: 14, nickname: 'Tysia' },
  { position: 3, points: 88, nickname: 'Mimigo' },
  { position: 4, points: 13, nickname: 'Kaffan' },
  { position: 5, points: 14, nickname: 'Eriko' },
];

const rows = elements.map((element) => (
  <tr key={element.nickname}>
    <td>{element.position}</td>
    <td>{element.nickname}</td>
    <td>{element.points}</td>
  </tr>
));

const Standings = () => {
  const theme = useMantineTheme();
  return (
    <Paper withBorder p="sm" m="sm" sx={{ maxWidth: 500 }}>
      <Title order={3} sx={{ marginBottom: 10 }}>
        Ranking:
      </Title>
      <Paper radius="xs" withBorder sx={{ backgroundColor: theme.colors.gray[0] }}>
        <Table highlightOnHover verticalSpacing="xs" fontSize="md">
          <thead>
            <tr>
              <th>Nr</th>
              <th>Pseudonim</th>
              <th>Punktów</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </Table>
      </Paper>
    </Paper>
  );
};

export default Standings;
