import { Button, ButtonProps } from '@mantine/core';

import { GoogleIcon } from './GoogleIcon';

export function GoogleButton(props: ButtonProps<'a'>) {
  return (
    <Button
      leftIcon={<GoogleIcon />}
      variant="default"
      color="gray"
      component="a"
      href={`${process.env.VITE_SERVER_URL}/api/auth/google/login`}
      {...props}
    >
      Kontynuuj przez Google
    </Button>
  );
}
