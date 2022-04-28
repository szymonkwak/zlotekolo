import { Center, Group, Modal, Stack, Text } from '@mantine/core';

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
        <Stack justify="space-around" spacing="xl" my="xl">
          <Center>
            <Logo />
          </Center>

          <Group direction="column" position="center" spacing="sm" p="md">
            <Text mb="lg" weight={500} align="center">
              Aplikacja do rejestrowania przejazdów rowerowych w kampanii{' '}
              <strong> &ldquo;Rowerem do pracy, czyli dom, rower, praca…i tak w kółko&ldquo;</strong>
            </Text>
            <GoogleButton />
          </Group>
        </Stack>
      }
    </Modal>
  );
};
