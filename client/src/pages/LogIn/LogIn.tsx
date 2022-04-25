import { Button, Container, Group, Modal, PasswordInput, Stack, Text, TextInput } from '@mantine/core';
import React from 'react';

import { GoogleButton } from '~/components/GoogleButton';
import { Logo } from '~/components/Logo';

export const LogIn = () => {
  return (
    <Modal
      centered
      withCloseButton={false}
      opened
      onClose={() => {
        /* do not close it */
      }}
    >
      {
        <Stack justify="space-around" spacing="xl" style={{ marginTop: 50, marginBottom: 50 }}>
          <Container size={235} px="0">
            <Logo />
          </Container>

          <Text weight={700} align="center">
            Zaloguj się na swoje konto
          </Text>

          <TextInput placeholder="Email" label="Email" />
          <PasswordInput placeholder="Hasło" label="Password" />
          <Group direction="column" position="center" spacing="sm" sx={{ padding: 15 }}>
            <Button type="submit">Zaloguj się</Button>
            <Text weight={500} align="center">
              lub
            </Text>
            <GoogleButton />
          </Group>
        </Stack>
      }
    </Modal>
  );
};
