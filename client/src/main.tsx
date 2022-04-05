import React from 'react';
import ReactDOM from 'react-dom';
import { QueryClientProvider } from './api/QueryClientProvider';
import { App } from './App';

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider>
      <App />
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
