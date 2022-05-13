import { Button, Grid, Paper, Title, useMantineTheme } from '@mantine/core';
import { DateRangePicker } from '@mantine/dates';
import { useMediaQuery } from '@mantine/hooks';
import { showNotification } from '@mantine/notifications';
import { SyntheticEvent, useState } from 'react';
import { useMutation } from 'react-query';
import { Calendar } from 'tabler-icons-react';

import { queryClient } from '~/api/QueryClientProvider';
import { QueryKeys } from '~/api/QueryKeys';

import { postBusinessTrip } from '../requests/postBusinessTrip';

const BusinessTrip = () => {
  const theme = useMantineTheme();
  const isMobile = useMediaQuery('(max-width: 600px)');
  const { mutateAsync: addBusinessTrip } = useMutation(postBusinessTrip);
  const [businessTripDates, setBusinessTripDates] = useState<[Date | null, Date | null]>([null, null]);

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    if (!businessTripDates[0] || !businessTripDates[1]) {
      showNotification({ message: 'Najpierw wybierz datę' });
      return;
    }
    await addBusinessTrip({ from: businessTripDates[0], to: businessTripDates[1] });
    queryClient.invalidateQueries(QueryKeys.Me);
    showNotification({ message: 'Delegacja została zapisana.', color: 'green' });
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
