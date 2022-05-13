import { Center, Indicator, Paper, Title, useMantineTheme } from '@mantine/core';
import { Calendar } from '@mantine/dates';
import { useEffect, useState } from 'react';

import { MeResponse } from '~/api/hooks/useMe';

import { isAtTheSameDay, tripsAtDay } from './calendarWithTripsCalculations';

type UserProps = { user: MeResponse };

const CalendarWithTrips = ({ user }: UserProps) => {
  const [tripsWithCount, setTripsWithCount] = useState<ReturnType<typeof tripsAtDay>>();
  const theme = useMantineTheme();

  useEffect(() => {
    setTripsWithCount(tripsAtDay(user.listOfTrips));
  }, [user]);

  return (
    <Paper component="form" withBorder={false} p="md" m="sm" sx={{ backgroundColor: theme.colors.gray[0] }}>
      <Title order={3} sx={{ marginBottom: 10 }}>
        Twoje przejazdy:
      </Title>
      <Center>
        <Calendar
          locale="pl"
          size="md"
          allowLevelChange={false}
          onChange={() => {
            ('');
          }}
          renderDay={(date) => {
            if (tripsWithCount?.find((trip) => isAtTheSameDay(trip.tripDate, date))) {
              const label = tripsWithCount.find((trip) => isAtTheSameDay(trip.tripDate, date));
              return (
                <Indicator label={label?.noOfTrips} size={15} offset={8}>
                  <div>{date.getDate()}</div>
                </Indicator>
              );
            } else {
              return <div>{date.getDate()}</div>;
            }
          }}
        />
      </Center>
    </Paper>
  );
};

export default CalendarWithTrips;
