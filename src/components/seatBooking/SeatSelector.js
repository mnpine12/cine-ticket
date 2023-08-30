import React from 'react';
import Box from '@mui/material/Box';

import { ssOuterBox } from '../../css/SeatBookingStyles';
import { SpectatorCounter } from './SpectatorCounter';
import { SeatDisplay } from './SeatDisplay';

export const SeatSelector = () => {
  const count = 1;
  return (
    <Box sx={ssOuterBox}>
      <SpectatorCounter />
      <SeatDisplay count={count} />
    </Box>
  );
};
