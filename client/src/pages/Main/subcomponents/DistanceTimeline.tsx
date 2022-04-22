import { Box, Timeline, Title } from '@mantine/core';

const DistanceTimeline = () => {
  return (
    <Box py="sm" m="sm">
      <Title order={3} sx={{ marginBottom: 10 }}>
        Wykręcony dystans:
      </Title>
      <Timeline active={1} bulletSize={24}>
        <Timeline.Item title="25km">
          <Box style={{ height: 40 }} />
        </Timeline.Item>
        <Timeline.Item title="50km">
          <Box style={{ height: 40 }} />
        </Timeline.Item>
        <Timeline.Item title="75km">
          <Box style={{ height: 40 }} />
        </Timeline.Item>
        <Timeline.Item title="100km"></Timeline.Item>
      </Timeline>
    </Box>
  );
};

export default DistanceTimeline;
