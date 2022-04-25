import { Button, Chip, Chips, Grid, Paper, Title, useMantineTheme } from '@mantine/core';
import { DatePicker } from '@mantine/dates';
import * as dayjs from 'dayjs';
import { SyntheticEvent, useState } from 'react';
import { useMutation } from 'react-query';
import { Calendar } from 'tabler-icons-react';

import { queryClient } from '~/api/QueryClientProvider';
import { QueryKeys } from '~/api/QueryKeys';

import { postTrip, TripType } from '../requests/postTrip';

const AddRide = () => {
  const theme = useMantineTheme();
  const addTrip = useMutation(postTrip);
  const [tripType, setTripType] = useState<TripType>('TO_WORK');
  const [tripDate, setTripDate] = useState<Date>(new Date(Date.now()));

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    addTrip.mutate({ tripDate, tripType }, { onSuccess: () => queryClient.invalidateQueries(QueryKeys.Me) });
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
            locale={dayjs.locale('pl')}
            allowLevelChange={false}
            icon={<Calendar size={16} />}
            placeholder="Wybierz"
          // minDate={dayjs(Date.now()).subtract(1, 'days').toDate()}
          // maxDate={dayjs(Date.now()).toDate()}
          // excludeDate={(date) => date.getDay() === 0 || date.getDay() === 6}
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
