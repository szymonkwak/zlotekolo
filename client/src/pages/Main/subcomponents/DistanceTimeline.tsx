import { Box, Text, Timeline, Title } from '@mantine/core';

const DistanceTimeline = () => {
  return (
    <Box py="sm" m="sm">
      <Title order={3} sx={{ marginBottom: 10 }}>
        Wykręcony dystans:
      </Title>
      <Timeline active={1} bulletSize={24}>
        <Timeline.Item title="25km">
          <Text size="xs" mt={4}>
            14-go Maja
          </Text>
        </Timeline.Item>
        <Timeline.Item title="50km">
          <Text size="xs" mt={4}>
            20-go Maja
          </Text>
        </Timeline.Item>
        <Timeline.Item title="75km">
          <Text size="xs" mt={4}>
            23-go Maja
          </Text>
        </Timeline.Item>
        <Timeline.Item title="25km">
          <Text size="xs" mt={4}>
            30-go Maja
          </Text>
        </Timeline.Item>
      </Timeline>
    </Box>
  );
};

export default DistanceTimeline;
