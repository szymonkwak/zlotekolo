import { BrowserRouter, Route, Routes } from 'react-router-dom';

import RequireAuth from '~/components/RequireAuth/RequireAuth';
import { ErrorPage } from '~/pages/Error/ErrorPage';
import { LogIn } from '~/pages/LogIn';
import { Main } from '~/pages/Main/Main';

import { Paths } from './paths';

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={Paths.Login} element={<LogIn />} />
        <Route element={<RequireAuth />}>
          <Route path={Paths.Home} element={<Main />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};
