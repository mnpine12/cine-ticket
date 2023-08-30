import React from 'react';
import Box from '@mui/material/Box';

import { sdOuterBox } from '../../css/SeatBookingStyles';
import { SeatDisplayToggleBtn } from './SeatDisplayToggleBtn';

export const SeatDisplay = ({ count }) => {
  return (
    <Box sx={sdOuterBox}>
      <img
        src='/images/icon/img-theater-screen.png'
        alt='img-theater-screen'
        style={{ marginTop: '2rem' }}
      />
      <br />
      <Box sx={{ marginTop: '1rem' }}>
        <SeatDisplayToggleBtn count={count} />
      </Box>
    </Box>
  );
};
