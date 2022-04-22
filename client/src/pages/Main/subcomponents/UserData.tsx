import { Avatar, Box, Text, Title } from '@mantine/core';

const UserData = ({ user }: any) => {
  return (
    <Box sx={{ display: 'flex', margin: 10 }}>
      <Avatar radius="xl" size="lg" src={user.avatar} />
      <Box ml="md">
        <Title order={2}>{user.nickname}</Title>
        <Text>{user.username}</Text>
      </Box>
    </Box>
  );
};

export default UserData;
