import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Configuration } from '~/pages/Configuration';
import { Home } from '~/pages/Home';
import { Leaderboard } from '~/pages/Leaderboard';
import { LogIn } from '~/pages/LogIn';

import { Paths } from './paths';

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={Paths.Home} element={<Home />} />
        <Route path={Paths.Configuration} element={<Configuration />} />
        <Route path={Paths.Login} element={<LogIn />} />
        <Route path={Paths.Leadearboard} element={<Leaderboard />} />
      </Routes>
    </BrowserRouter>
  );
};
