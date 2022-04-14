import React from 'react';
import { Button, ButtonProps } from '@mantine/core';
import { GoogleIcon } from './GoogleIcon';


export function GoogleButton(props: ButtonProps<'a'>) {
  return <Button leftIcon={<GoogleIcon />} variant="default" color="gray" component="a" href="/api/auth/google/login" {...props}>Kontynuuj przez Google</Button>;
}
