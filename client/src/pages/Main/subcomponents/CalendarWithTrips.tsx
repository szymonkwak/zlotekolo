import { Accordion, Center, Indicator, Paper, Title } from '@mantine/core';
import { Calendar } from '@mantine/dates';

function CalendarWithTrips() {
  const find = (a: number[], nr: number) => {
    return a.find((el) => el === nr);
  };
  const a = [1, 2, 3, 4, 5, 6, 7, 8, 9];

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
                const day = date.getDate();
                return find(a, day) ? (
                  <Indicator label={find(a, day)} size={15} offset={7}>
                    <div>{day}</div>
                  </Indicator>
                ) : (
                  <div>{day}</div>
                );
              }}
            />
          </Center>
        </Accordion.Item>
      </Accordion>
    </Paper>
  );
}

export default CalendarWithTrips;
