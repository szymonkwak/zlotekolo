import { Button, Grid, Paper, Title, useMantineTheme } from '@mantine/core';
import { DateRangePicker } from '@mantine/dates';
import { useMediaQuery } from '@mantine/hooks';
import { SyntheticEvent, useState } from 'react';
import { Calendar } from 'tabler-icons-react';

const BusinessTrip = () => {
  const theme = useMantineTheme();
  const isMobile = useMediaQuery('(max-width: 600px)');
  const [businessTripDates, setBusinessTripDates] = useState<[Date | null, Date | null]>();

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    console.log(businessTripDates);
    console.log('submit');
  };
  return (
    <Paper component="form" onSubmit={handleSubmit} withBorder={false} p="md" m="sm" sx={{ backgroundColor: theme.colors.gray[0] }}>
      <Title order={3} sx={{ marginBottom: 10 }}>
        Dodaj delegację:
      </Title>
      <Grid gutter="xs" align="center">
        <Grid.Col span={3}>
          <Title order={5}>Data:</Title>
        </Grid.Col>

        <Grid.Col span={8}>
          <DateRangePicker
            value={businessTripDates}
            onChange={setBusinessTripDates}
            required
            locale="pl"
            dropdownType={isMobile ? 'modal' : 'popover'}
            allowLevelChange={false}
            icon={<Calendar size={16} />}
            placeholder="Wybierz"
            maxDate={new Date()}
          />
        </Grid.Col>

        <Grid.Col span={9} offset={3}>
          <Button type="submit" px="xl">
            Zapisz delegację
          </Button>
        </Grid.Col>
      </Grid>
    </Paper>
  );
};

export default BusinessTrip;
