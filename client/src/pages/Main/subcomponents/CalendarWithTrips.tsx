import { Accordion, Center, Indicator, Paper, Title } from '@mantine/core';
import { Calendar } from '@mantine/dates';
import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';

import { QueryKeys } from '~/api/QueryKeys';
import { LoaderCentered } from '~/components/Loader/LoaderCentered';

import { getUserTrips } from '../requests/getUserTrips';
import { tripsAtDay } from './calendarWithTripsCalculations';

const CalendarWithTrips = () => {
  const [tripsWithCount, setTripsWithCount] = useState<ReturnType<typeof tripsAtDay>>([{ tripDate: '2022-05-01', noOfTrips: 8 }]);
  const { data: trips, isLoading, isError, isSuccess } = useQuery(QueryKeys.Trips, getUserTrips);

  useEffect(() => {
    setTripsWithCount(tripsAtDay(trips));
    console.log(tripsWithCount);
  }, [trips]);

  if (isLoading) return <LoaderCentered />;

  return (
    <Paper component="form" withBorder={true} p="md" m="sm">
      <Accordion initialItem={0} p={0} transitionDuration={600}>
        <Accordion.Item iconPosition="right" label={<Title order={3}>Twoje przejazdy:</Title>}>
          <Center>
            <Calendar
              locale="pl"
              mr={20}
              size="md"
              allowLevelChange={false}
              renderDay={(date) => {
                // console.log(date.getDate());
                // console.log(date.toISOString().slice(0, 10));
                // return <div>{date.getDate()}</div>;

                const arr = [2, 5];
                if (arr.includes(date.getDay())) {
                  //   console.log('oo');
                }
                // console.log(tripsWithCount);
                // if (tripsWithCount?.includes({ tripDate: date.toISOString().slice(0, 10) })) {
                //   console.log('it does');
                // }

                if (tripsWithCount?.find((trip) => trip.tripDate === date.toISOString().slice(0, 10))) {
                  const label = tripsWithCount.find((trip) => trip.tripDate === date.toISOString().slice(0, 10));
                  return (
                    <Indicator label={label?.noOfTrips} size={15} offset={7}>
                      <div>{date.getDate()}</div>
                    </Indicator>
                  );
                } else {
                  return <div>{date.getDate()}</div>;
                }

                return arr.includes(date.getDay()) ? (
                  <Indicator label={date.getDay()} size={15} offset={7}>
                    <div>{date.getDate()}</div>
                  </Indicator>
                ) : (
                  <div>{date.getDate()}</div>
                );

                // if tripsWithCount?.indexOf({tripDate: date.getDate()}).toString().includes(date.toISOString().slice(0, 10)))

                return tripsWithCount?.map(
                  (trip) =>
                    trip.tripDate === date.toISOString().slice(0, 10) ? (
                      <>
                        <Indicator label={trip.noOfTrips} size={15} offset={7}>
                          <div>{date.getDate() - 1}</div>
                        </Indicator>
                      </>
                    ) : null
                  //   <div>1</div>
                  // <div>{date.getDate()}</div>
                );
                console.log('not');
                return <div>{date.getDate()}</div>;
              }}
            />
          </Center>
        </Accordion.Item>
      </Accordion>
    </Paper>
  );
};

export default CalendarWithTrips;
