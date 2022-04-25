import { Box, Button, Divider, Paper, Table, Title, useMantineTheme } from '@mantine/core';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { axiosClient } from '~/api/axiosClient';
import { MeResponse } from '~/api/hooks/useMe';
import { Paths } from '~/routes/paths';

type UserProps = { user: MeResponse };

const Standings = ({ user }: UserProps) => {
  const [users, setUsers] = useState<any[]>([]);
  const navigate = useNavigate();

  const getUsersFromDataBase = async () => {
    const response = await axiosClient.get(`${process.env.VITE_SERVER_URL}/api/scoring/users`);
    setUsers(response?.data);
  };

  useEffect(() => {
    getUsersFromDataBase();
  }, []);

  const sortedUsers = users.sort((a, b) => b.score - a.score).map((user, i) => ({ ...user, position: i + 1 }));

  const myPosition = sortedUsers.findIndex((u) => user.id === u.id);
  const limitedUsers = myPosition < 3 ? sortedUsers.slice(0, 5) : sortedUsers.slice(myPosition - 2, myPosition + 2);

  const rows = limitedUsers.map((user) => (
    <tr key={user.nickname}>
      <td>{user.position}</td>
      <td>{user.nickname}</td>
      <td>{(user.score * 100).toFixed(2)}%</td>
    </tr>
  ));

  const theme = useMantineTheme();

  const handleClick = () => {
    navigate(Paths.Leadearboard);
  };

  return (
    <>
      <Paper withBorder p="sm" m="sm">
        <Title order={3} sx={{ marginBottom: 10 }}>
          Ranking:
        </Title>
        <Paper radius="xs" withBorder={false} sx={{ backgroundColor: theme.colors.gray[0] }}>
          <Table highlightOnHover verticalSpacing="xs" fontSize="md">
            <thead>
              <tr>
                <th>Miejsce</th>
                <th>Pseudonim</th>
                <th>Frekwencja</th>
              </tr>
            </thead>
            <tbody>{rows}</tbody>
          </Table>
        </Paper>
        <Divider />
        <Box mt="md" style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button onClick={handleClick} size="md">
            Wyświetl ranking
          </Button>
        </Box>
      </Paper>
    </>
  );
};

export default Standings;
