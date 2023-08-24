import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import {
  bctContainerBox,
  bctGridItemTimeList,
  bctGridItemTypo,
  bctInnerContainerBox,
} from '../../css/BookingStyles';
import { HeaderTime } from './HeaderTime';
import { BodyTimeList } from './BodyTimeList';

export const BodyTime = () => {
  return (
    <Box sx={bctContainerBox}>
      <Box sx={bctInnerContainerBox}>
        <Grid container>
          <Grid item xs={12} sm={12} sx={bctGridItemTypo}>
            <Typography variant='text'>시간</Typography>
          </Grid>
          <Grid item xs={12} sm={12}>
            <HeaderTime />
          </Grid>
          <Grid item xs={12} sm={12} sx={bctGridItemTimeList}>
            <BodyTimeList />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
