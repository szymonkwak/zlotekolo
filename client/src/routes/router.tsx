import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { ErrorPage } from '~/pages/Error/ErrorPage';
import { LogIn } from '~/pages/LogIn';
import { Main } from '~/pages/Main/Main';

import { Paths } from './paths';

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={Paths.Home} element={<Main />} />
        <Route path={Paths.Login} element={<LogIn />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};
