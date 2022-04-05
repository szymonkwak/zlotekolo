import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from '~/pages/Home';
import { Paths } from './paths';

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={Paths.Home} element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};
