import { Button, Chip, Chips, Grid, Paper, Title } from '@mantine/core';
import { DatePicker } from '@mantine/dates';
import * as dayjs from 'dayjs';

const AddRide = () => {
  return (
    <Paper withBorder p="sm" m="sm" sx={{ maxWidth: 500 }}>
      <Title order={3} sx={{ marginBottom: 10 }}>
        Dodaj przejazd:
      </Title>
      <Grid gutter="xs">
        <Grid.Col span={3}>
          <Title order={5}>Data:</Title>
        </Grid.Col>
        <Grid.Col span={7}>
          <DatePicker
            //TODO ikonka
            required
            locale={dayjs.locale('pl')}
            allowLevelChange={false}
            placeholder="Wybierz"
            // label="Data"
            minDate={dayjs(new Date()).startOf('month').add(1, 'days').toDate()}
            maxDate={dayjs(new Date()).endOf('month').subtract(5, 'days').toDate()}
            excludeDate={(date) => date.getDay() === 0 || date.getDay() === 6}
          />
        </Grid.Col>

        <Grid.Col span={3}>
          <Title order={5}>Przejazd: </Title>
        </Grid.Col>

        <Grid.Col span={9}>
          <Chips>
            <Chip value="toWork">Do pracy</Chip>
            <Chip value="toHome">Do domu</Chip>
          </Chips>
        </Grid.Col>
        <Grid.Col span={9} offset={3}>
          <Button>Dodaj</Button>
        </Grid.Col>
      </Grid>
    </Paper>
  );
};

export default AddRide;
