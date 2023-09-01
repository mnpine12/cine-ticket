import React from 'react';
import Box from '@mui/material/Box';

import { BodyMovie } from './BodyMovie';
import { BodyPlace } from './BodyPlace';
import { BodyTime } from './BodyTime';

import { bcContainerBox } from '../../css/BookingStyles';

export const BodyContents = ({ movieId }) => {
  return (
    <Box sx={bcContainerBox}>
      <BodyMovie movieId={movieId} />
      <BodyPlace />
      <BodyTime />
    </Box>
  );
};
