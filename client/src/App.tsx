import { MantineProvider } from '@mantine/core';
import { NotificationsProvider } from '@mantine/notifications';

import { defaultTheme } from './api/theme';
import { Router } from './routes/router';

export const App = () => {
  return (
    <MantineProvider withNormalizeCSS theme={defaultTheme}>
      <NotificationsProvider position="top-center">
        <Router />
      </NotificationsProvider>
    </MantineProvider>
  );
};
