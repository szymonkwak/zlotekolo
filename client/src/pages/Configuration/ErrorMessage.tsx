import { Collapse, Notification } from '@mantine/core';
import { Dispatch, SetStateAction } from 'react';

type ErrorMessageType = {
  message: string;
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
};

const ErrorMessage = ({ message, open, setOpen }: ErrorMessageType) => {
  return (
    <Collapse in={open}>
      <Notification onClose={() => setOpen(false)} sx={{ fontSize: 'large', my: 2 }}>
        {message}
      </Notification>
    </Collapse>
  );
};

export default ErrorMessage;
