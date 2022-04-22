import { ActionIcon, Popover, Text } from '@mantine/core';
import { useState } from 'react';
import { AlertCircle } from 'tabler-icons-react';

type InfoCircleProps = {
  info: string;
};

export const InfoCircle = ({ info }: InfoCircleProps) => {
  const [opened, setOpened] = useState(false);

  return (
    <Popover
      opened={opened}
      onClose={() => setOpened(false)}
      position="bottom"
      placement="center"
      withArrow
      trapFocus={false}
      closeOnEscape={false}
      transition="pop-top-left"
      width={260}
      styles={{ body: { pointerEvents: 'none' } }}
      target={
        <ActionIcon
          sx={{
            paddingTop: '25px',
            paddingRight: '5px',
          }}
          onMouseEnter={() => setOpened(true)}
          onMouseLeave={() => setOpened(false)}
        >
          <AlertCircle size={20} style={{ color: 'lime' }}></AlertCircle>
        </ActionIcon>
      }
    >
      <div style={{ display: 'flex' }}>
        <Text size="sm">{info}</Text>
      </div>
    </Popover>
  );
};
