import { Button } from '@mantine/core';
import { useNavigate } from 'react-router-dom';

import { Paths } from '~/routes/paths';

export const LogoutButton = () => {
  const navigate = useNavigate();
  const logout = () => {
    window.localStorage.removeItem('accessToken');
    navigate(Paths.Login);
  };

  return (
    <Button variant="outline" m={10} onClick={logout}>
      Wyloguj
    </Button>
  );
};
