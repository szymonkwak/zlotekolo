import { Box, Timeline, Title } from '@mantine/core';

import { MeResponse } from '~/api/hooks/useMe';

import { noOfSelectedBullets, timelineBulletValues } from './distanceTimelineCalculations';

type UserProps = { user: MeResponse };

const NO_OF_BULLETS = 6;

const DistanceTimeline = ({ user }: UserProps) => {
  return (
    <Box py="sm" m="sm">
      <Title order={3} sx={{ marginBottom: 10 }}>
        Wykręcony dystans:
      </Title>
      <Timeline active={noOfSelectedBullets(user, NO_OF_BULLETS)} bulletSize={24}>
        {timelineBulletValues(user, NO_OF_BULLETS).map((value) => (
          <Timeline.Item key={value} title={value}>
            <Box style={{ height: 40 }} />
          </Timeline.Item>
        ))}
      </Timeline>
    </Box>
  );
};

export default DistanceTimeline;
