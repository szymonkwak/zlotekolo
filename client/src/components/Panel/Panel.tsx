import React, { ReactNode } from "react";

import { Box, MantineTheme } from "@mantine/core";

const styles = (theme: MantineTheme) => ({
  maxWidth: 300,
  background: theme.white,
  borderRadius: '5px',
  padding: '80px 40px',
})

type PanelProps = {
  children: ReactNode
}

export const Panel = ({ children }: PanelProps) => {
  return <Box sx={styles} mx="auto">{children}</Box>
}
