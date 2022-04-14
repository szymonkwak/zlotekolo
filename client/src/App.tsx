import { Global, MantineProvider } from '@mantine/core';

import { defaultTheme } from './api/theme';
import { Router } from './routes/router';

export const App = () => {

  return (
    <MantineProvider theme={defaultTheme}>
      <Global styles={(theme) => ({ body: { background: theme.colors.gray[9] } })} />
      <Router />
    </MantineProvider>
  );
};
