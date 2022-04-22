import { Title } from '@mantine/core';

type HeaderProps = {
  title: string;
};

export const Header = ({ title }: HeaderProps) => {
  return <Title order={2}>{title}</Title>;
};
