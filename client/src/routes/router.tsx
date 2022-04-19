import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Home } from '~/pages/Home';
import { LogIn } from '~/pages/LogIn';

import { Paths } from './paths';

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={Paths.Home} element={<Home />} />
        <Route path={Paths.Login} element={<LogIn />} />
      </Routes>
    </BrowserRouter>
  );
};
