import React from 'react';
import { Button, Box, Text, TextInput, PasswordInput } from '@mantine/core';


import { Panel } from '../../components/Panel';
import { Logo } from '../../components/Logo';
import { GoogleButton } from '../../components/GoogleButton';

export const LogIn = () => {
  return (
    <Panel>
      <Logo />

      <Text weight={700}>Zaloguj się na swoje konto</Text>

      <TextInput
        placeholder="Email"
        label="Email"
      />
      <PasswordInput
        placeholder="Hasło"
        label="Password"
      />
      <Button type="submit" /*onClick={handleSignIn} sx={{ alignSelf: 'end', mt: 1 }}*/>
        Zaloguj się
      </Button>
      <Text size="sm">lub</Text>
      <GoogleButton />

    </Panel>
  )

};
