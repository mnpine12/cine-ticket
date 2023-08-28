import React from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import LoopIcon from '@mui/icons-material/Loop';

import {
  ssCountButton,
  ssOuterBox,
  ssTopButton,
  ssTopGridContainer,
  ssTopTitleTypo,
} from '../../css/SeatBookingStyles';

export const SeatSelector = () => {
  return (
    <Box sx={ssOuterBox}>
      <Grid container sx={ssTopGridContainer}>
        <Grid item xs={12} sm={6}>
          <Typography sx={ssTopTitleTypo}>관람인원선택</Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
          }}
        >
          <Button
            disableElevation
            disableRipple
            variant='contained'
            size='small'
            sx={ssTopButton}
          >
            <LoopIcon />
            초기화
          </Button>
        </Grid>
        <Grid item xs={12} sm={12}>
          <Button
            disableElevation
            disableRipple
            variant='contained'
            sx={ssCountButton}
          >
            -
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};
