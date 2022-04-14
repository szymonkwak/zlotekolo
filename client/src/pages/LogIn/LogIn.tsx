import { Button, Container, Group, PasswordInput, Stack,Text, TextInput } from '@mantine/core';
import React from 'react';

import { GoogleButton } from '../../components/GoogleButton';
import { Logo } from '../../components/Logo';
import { Panel } from '../../components/Panel';

export const LogIn = () => {
  return (
    <Panel>
      <Stack justify="space-around" spacing="xl">
        <Container size={220} px="0">
          <Logo />
        </Container>

        <Text weight={700} align="center">Zaloguj się na swoje konto</Text>

        <TextInput
          placeholder="Email"
          label="Email"
        />
        <PasswordInput
          placeholder="Hasło"
          label="Password"
        />
        <Group direction="column" position="center" spacing="sm" sx={{ padding: 15 }}>
          <Button type="submit">
            Zaloguj się
          </Button>
          <Text weight={500} align="center">lub</Text>
          <GoogleButton />
        </Group>
      </Stack>
    </Panel>
  )

};
