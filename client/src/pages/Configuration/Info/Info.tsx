import { Center, Popover, Text } from '@mantine/core';
import { useState } from 'react';
import { InfoCircle } from 'tabler-icons-react';

type InfoCircleProps = {
  hoverText: string;
};

export const Info = ({ hoverText: info }: InfoCircleProps) => {
  const [opened, setOpened] = useState(false);

  return (
    <Popover
      opened={opened}
      onClose={() => setOpened(false)}
      position="top"
      withArrow
      trapFocus={false}
      closeOnEscape={false}
      transition="pop"
      width={340}
      target={
        <Center>
          <InfoCircle size={20} onMouseEnter={() => setOpened(true)} onMouseLeave={() => setOpened(false)} />
        </Center>
      }
    >
      <div style={{ display: 'flex' }}>
        <Text size="sm">{info}</Text>
      </div>
    </Popover>
  );
};
