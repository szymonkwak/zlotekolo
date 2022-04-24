import { Avatar, Box, Button, Group, Paper, ScrollArea, Table, Text } from '@mantine/core';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowNarrowLeft } from 'tabler-icons-react';

import { Logo } from '~/components/Logo';
import { Paths } from '~/routes/paths';
import { getCookie } from '~/utils/getCookie';

import { boxStyles } from '../Configuration/Configuration.styles';
import { Header } from '../Configuration/Header';
import { GoldWheel } from './Icons';

export const Leaderboard = () => {
  const [users, setUsers] = useState<any[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    document.body.style.margin = '0';
  }, []);

  const getUsersFromDataBase = async () => {
    const response = await axios.get(`${process.env.VITE_SERVER_URL}/api/scoring/users`, {
      headers: {
        accessToken: getCookie('accessToken'),
      },
    });
    setUsers(response?.data);
  };

  useEffect(() => {
    getUsersFromDataBase();
  }, []);

  const handleClick = () => {
    navigate(Paths.Home);
  };

  const sortedUsers = users.sort((a, b) => b.score - a.score);

  return (
    <>
      <Box
        sx={(theme) => ({
          backgroundColor: theme.colors.dark[3],
        })}
        style={boxStyles}
      >
        <Paper
          sx={(theme) => ({
            boxShadow: theme.shadows.xl,
            minWidth: '80rem',
            height: '53rem',
            padding: '3rem',
          })}
        >
          <Box sx={{ display: 'grid', gridTemplateColumns: '1.5fr 2fr', paddingBottom: '3rem' }}>
            <Logo />
            <Header title="Ranking" />
          </Box>
          <Box style={{ height: 500, paddingBottom: '3rem' }}>
            <ScrollArea style={{ height: 500, padding: '0px 25px' }}>
              <Table sx={{ minWidth: 800 }} verticalSpacing="md">
                <thead>
                  <tr>
                    <th>Miejsce</th>
                    <th>Pseudonim</th>
                    <th>Frekwencja</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {sortedUsers.map((user, idx) => (
                    <tr key={idx}>
                      <td>
                        <Group>
                          <Text size="sm" sx={{ paddingLeft: 20 }}>
                            {idx + 1}
                          </Text>
                        </Group>
                      </td>
                      <td>
                        <Group spacing="sm">
                          <Avatar size={40} src={user.avatar} radius={40} />
                          <div>
                            <Text size="sm" weight={500}>
                              {user?.nickname}
                            </Text>
                          </div>
                        </Group>
                      </td>
                      <td>
                        <Group>
                          <Text size="sm">{(user?.score * 100).toFixed(2)}%</Text>
                        </Group>
                      </td>
                      <td>
                        <Group spacing={0} position="right">
                          <GoldWheel />
                        </Group>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </ScrollArea>
          </Box>
          <Button onClick={handleClick} size="lg" leftIcon={<ArrowNarrowLeft size={30} />}>
            WRÓĆ DO STRONY GŁÓWNEJ
          </Button>
        </Paper>
      </Box>
    </>
  );
};
