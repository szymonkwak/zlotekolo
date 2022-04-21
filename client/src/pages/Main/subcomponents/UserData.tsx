import { Avatar, Box, Title } from '@mantine/core';

const UserData = () => {
  return (
    <Box sx={{ display: 'flex', margin: 10 }}>
      <Avatar radius="xl" size="lg" src="//TODO" />
      <Box sx={{ marginLeft: 10 }}>
        <Title order={2}>TODO name</Title>
        <Title order={5}>TODO locaton</Title>
      </Box>
    </Box>
  );
};

export default UserData;
