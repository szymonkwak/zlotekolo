import { FC } from 'react';
import { QueryClient, QueryClientProvider as Provider } from 'react-query';

const client = new QueryClient();

export const QueryClientProvider: FC = ({ children }) => <Provider client={client}>{children}</Provider>;
