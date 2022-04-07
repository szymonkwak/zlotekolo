import { MantineProvider } from '@mantine/core';
import { Router } from './routes/router';

export const App = () => {

  return (
    <MantineProvider theme={{ colorScheme: 'dark', primaryColor: 'orange' }}>
      <Router />
    </MantineProvider>
  );
};
