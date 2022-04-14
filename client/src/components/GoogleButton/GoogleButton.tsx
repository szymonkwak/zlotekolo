import { Button, ButtonProps } from '@mantine/core';
import React from 'react';

import { GoogleIcon } from './GoogleIcon';


export function GoogleButton(props: ButtonProps<'a'>) {
  return <Button leftIcon={<GoogleIcon />} variant="default" color="gray" component="a" href="http://localhost:5000/api/auth/google/login" {...props}>Kontynuuj przez Google</Button>;
}
