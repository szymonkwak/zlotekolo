import { Avatar, Box, Text, Title } from '@mantine/core';

import { MeResponse } from '~/api/hooks/useMe';

type UserProps = { user: MeResponse };

const UserData = ({ user }: UserProps) => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', margin: 10 }}>
      <Avatar radius="xl" size="lg" src={user.avatar} />
      <Box ml="md">
        <Title order={2}>{user.nickname}</Title>
        <Text>{user.username}</Text>
      </Box>
    </Box>
  );
};

export default UserData;
