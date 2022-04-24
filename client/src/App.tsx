import { MantineProvider } from '@mantine/core';

import { defaultTheme } from './api/theme';
import { Router } from './routes/router';

export const App = () => {
  return (
    <MantineProvider withNormalizeCSS theme={defaultTheme}>
      <Router />
    </MantineProvider>
  );
};
