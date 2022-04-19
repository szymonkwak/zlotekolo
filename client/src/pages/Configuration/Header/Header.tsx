import { Title } from '@mantine/core';

type TitleProps = {
  title: string;
};

export const Header = ({ title }: TitleProps) => {
  return <Title order={2}>{title}</Title>;
};
