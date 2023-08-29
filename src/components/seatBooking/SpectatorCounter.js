import React, { useState } from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import LoopIcon from '@mui/icons-material/Loop';
import IconButton from '@mui/material/IconButton';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';

import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

import {
  ssCountButton,
  ssCountTextField,
  ssGridItemCount,
  ssGridItemCountBox,
  ssTopButton,
  ssTopGridContainer,
  ssTopTitleTypo,
} from '../../css/SeatBookingStyles';

export const SpectatorCounter = () => {
  const [adult, setAdult] = useState(0);
  const [teenager, setTeenager] = useState(0);
  const [privileged, setPrivileged] = useState(0);

  const handleOnClickInitialize = () => {
    setAdult(0);
    setTeenager(0);
    setPrivileged(0);
  };

  const handleOnClickCountAdd = (type) => {
    switch (type) {
      case 0:
        let A = adult + 1;
        setAdult(A);
        break;
      case 1:
        let T = teenager + 1;
        setTeenager(T);
        break;
      case 2:
        let P = privileged + 1;
        setPrivileged(P);
        break;
      default:
        console.error('더하기 타입 에러');
        break;
    }
  };

  const handleOnClickCountDecrease = (type) => {
    switch (type) {
      case 0:
        let A = adult === 0 ? 0 : adult - 1;
        setAdult(A);
        break;
      case 1:
        let T = teenager === 0 ? 0 : teenager - 1;
        setTeenager(T);
        break;
      case 2:
        let P = privileged === 0 ? 0 : privileged - 1;
        setPrivileged(P);
        break;
      default:
        console.error('빼기 타입 에러');
        break;
    }
  };

  return (
    <Box>
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
            onClick={handleOnClickInitialize}
          >
            <LoopIcon />
            초기화
          </Button>
        </Grid>
        <Grid item xs={12} sm={12} sx={ssGridItemCount}>
          <Box id='adult-count' sx={ssGridItemCountBox}>
            <InputLabel>성인</InputLabel>
            <IconButton
              disableElevation
              disableRipple
              variant='contained'
              sx={{ ...ssCountButton, marginLeft: '10px' }}
              onClick={() => handleOnClickCountDecrease(0)}
            >
              <RemoveIcon />
            </IconButton>
            <TextField
              size='small'
              defaultValue={0}
              value={adult}
              sx={ssCountTextField}
            />
            <IconButton
              disableElevation
              disableRipple
              variant='contained'
              sx={ssCountButton}
              onClick={() => handleOnClickCountAdd(0)}
            >
              <AddIcon />
            </IconButton>
          </Box>
          <Box
            id='teenager-count'
            sx={{
              ...ssGridItemCountBox,
              marginLeft: '3rem',
            }}
          >
            <InputLabel>청소년</InputLabel>
            <IconButton
              disableElevation
              disableRipple
              variant='contained'
              sx={{ ...ssCountButton, marginLeft: '10px' }}
              onClick={() => handleOnClickCountDecrease(1)}
            >
              <RemoveIcon />
            </IconButton>
            <TextField
              size='small'
              defaultValue={0}
              value={teenager}
              sx={ssCountTextField}
            />
            <IconButton
              disableElevation
              disableRipple
              variant='contained'
              sx={ssCountButton}
              onClick={() => handleOnClickCountAdd(1)}
            >
              <AddIcon />
            </IconButton>
          </Box>
          <Box
            id='privileged-count'
            sx={{
              ...ssGridItemCountBox,
              marginLeft: '3rem',
            }}
          >
            <InputLabel>우대</InputLabel>
            <IconButton
              disableElevation
              disableRipple
              variant='contained'
              sx={{ ...ssCountButton, marginLeft: '10px' }}
              onClick={() => handleOnClickCountDecrease(2)}
            >
              <RemoveIcon />
            </IconButton>
            <TextField
              size='small'
              defaultValue={0}
              value={privileged}
              sx={ssCountTextField}
            />
            <IconButton
              disableElevation
              disableRipple
              variant='contained'
              sx={ssCountButton}
              onClick={() => handleOnClickCountAdd(2)}
            >
              <AddIcon />
            </IconButton>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
