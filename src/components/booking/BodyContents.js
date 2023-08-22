import React from 'react';
import Box from '@mui/material/Box';

import { BodyMovie } from './BodyMovie';
import { BodyPlace } from './BodyPlace';
import { BodyTime } from './BodyTime';

import { bcContainerBox } from '../../css/BookingStyles';

export const BodyContents = () => {
  return (
    <Box sx={bcContainerBox}>
      <BodyMovie />
      <BodyPlace />
      <BodyTime />
    </Box>
  );
};
