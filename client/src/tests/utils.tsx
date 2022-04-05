import '@testing-library/jest-dom';
import { render, RenderOptions } from '@testing-library/react';
import { FC, ReactElement } from 'react';
import { QueryClientProvider } from '~/api/QueryClientProvider';

const AllTheProviders: FC = ({ children }) => {
  return <QueryClientProvider>{children}</QueryClientProvider>;
};

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) => render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';
export { customRender as render };
