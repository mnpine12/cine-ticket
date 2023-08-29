import React from 'react';
import Box from '@mui/material/Box';

import { ssOuterBox } from '../../css/SeatBookingStyles';
import { SpectatorCounter } from './SpectatorCounter';
import { SeatDisplay } from './SeatDisplay';

export const SeatSelector = () => {
  return (
    <Box sx={ssOuterBox}>
      <SpectatorCounter />
      <SeatDisplay />
    </Box>
  );
};
