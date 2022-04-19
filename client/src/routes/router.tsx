import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Configuration } from '~/pages/Configuration/Configuration';
import { Home } from '~/pages/Home/Home';

import { Paths } from './paths';

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={Paths.Home} element={<Home />} />
        <Route path={Paths.Configuration} element={<Configuration />} />
      </Routes>
    </BrowserRouter>
  );
};
