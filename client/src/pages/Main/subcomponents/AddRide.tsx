import 'dayjs/locale/pl';

import { Button, Chip, Chips, Grid, Paper, Title, useMantineTheme } from '@mantine/core';
import { DatePicker } from '@mantine/dates';
import { showNotification } from '@mantine/notifications';
import dayjs from 'dayjs';
import { SyntheticEvent, useState } from 'react';
import { useMutation } from 'react-query';
import { Calendar } from 'tabler-icons-react';

import { queryClient } from '~/api/QueryClientProvider';
import { QueryKeys } from '~/api/QueryKeys';

import { postTrip, TripType } from '../requests/postTrip';

const AddRide = () => {
  const theme = useMantineTheme();
  const { mutateAsync: addTrip } = useMutation(postTrip);
  const [tripType, setTripType] = useState<TripType>('TO_WORK');
  const [tripDate, setTripDate] = useState<Date>(new Date());

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    tripDate.setHours(12);
    await addTrip({ tripDate, tripType });
    queryClient.invalidateQueries(QueryKeys.Me);
    showNotification({ message: 'Przejazd został zapisany', color: 'green' });
  };

  const handleSelectTrip = (value: TripType) => {
    setTripType(value);
  };
  const handleSelectDate = (value: Date) => {
    setTripDate(value);
  };

  return (
    <Paper component="form" onSubmit={handleSubmit} withBorder={false} p="md" m="sm" sx={{ backgroundColor: theme.colors.gold[1] }}>
      <Title order={3} sx={{ marginBottom: 10 }}>
        Dodaj przejazd:
      </Title>
      <Grid gutter="xs" align="center">
        <Grid.Col span={3}>
          <Title order={5}>Data:</Title>
        </Grid.Col>

        <Grid.Col span={8}>
          <DatePicker
            value={tripDate}
            onChange={handleSelectDate}
            required
            locale="pl"
            allowLevelChange={false}
            icon={<Calendar size={16} />}
            placeholder="Wybierz"
            maxDate={new Date()}
          />
        </Grid.Col>

        <Grid.Col span={3}>
          <Title order={5}>Przejazd: </Title>
        </Grid.Col>

        <Grid.Col span={9}>
          <Chips value={tripType} onChange={handleSelectTrip}>
            <Chip value="TO_WORK">Do pracy</Chip>
            <Chip value="TO_HOME">Do domu</Chip>
          </Chips>
        </Grid.Col>

        <Grid.Col span={9} offset={3}>
          <Button type="submit" px="xl">
            Zapisz przejazd
          </Button>
        </Grid.Col>
      </Grid>
    </Paper>
  );
};

export default AddRide;
