import { Avatar, Box, Button, Group, Paper, ScrollArea, Table, Text } from '@mantine/core';
import { ReactElement, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowNarrowLeft } from 'tabler-icons-react';

import { Logo } from '~/components/Logo';
import { Paths } from '~/routes/paths';

import { boxStyles } from '../Configuration/Configuration.styles';
import { Header } from '../Configuration/Header';
import { BronzeWheel, GoldWheel, SilverWheel } from './Icons';

export const Leaderboard = () => {
  const [icon, setIcon] = useState<ReactElement>();
  const navigate = useNavigate();
  const users = [
    { name: 'Anka', points: 32 },
    { name: 'Grzesiek', points: 70 },
    { name: 'Ktoś', points: 80 },
    { name: 'Blabla', points: 15 },
    { name: 'Anka223', points: 46 },
    { name: 'Anka224', points: 46 },
    { name: 'Anka227', points: 46 },
  ];

  const handleClick = () => {
    navigate(Paths.Home);
  };

  useEffect(() => {
    users.map((user) => {
      if (user.points <= 50) {
        setIcon(<SilverWheel />);
      } else if (user.points > 50) {
        setIcon(<GoldWheel />);
      }
      setIcon(<BronzeWheel />);
    });
  }, []);

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
            <ScrollArea style={{ height: 500 }}>
              <Table sx={{ minWidth: 800 }} verticalSpacing="md">
                <thead>
                  <tr>
                    <th>Pseudonim</th>
                    <th>Frekwencja</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user, idx) => (
                    <tr key={idx}>
                      <td>
                        <Group spacing="sm">
                          <Avatar size={40} radius={40} />
                          <div>
                            <Text size="sm" weight={500}>
                              {user.name}
                            </Text>
                          </div>
                        </Group>
                      </td>
                      <td>
                        <Group>
                          <Text size="sm">{user.points}%</Text>
                        </Group>
                      </td>
                      <td>
                        <Group spacing={0} position="right">
                          {icon}
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
