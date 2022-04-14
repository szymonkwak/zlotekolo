import React from 'react';
import { Button, Text, TextInput, PasswordInput, Group, Container } from '@mantine/core';


import { Panel } from '../../components/Panel';
import { Logo } from '../../components/Logo';
import { GoogleButton } from '../../components/GoogleButton';

export const LogIn = () => {
  return (
    <Panel>
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
      <Group direction='column' position='center' spacing={'sm'} sx={{ padding: 15 }}>
        <Button type="submit">
          Zaloguj się
        </Button>
        <Text weight={500} align="center">lub</Text>
        <GoogleButton />
      </Group>

    </Panel>
  )

};
