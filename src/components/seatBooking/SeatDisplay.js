import React, { useState } from 'react';
import Box from '@mui/material/Box';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

import {
  sdOuterBox,
  sdLetterToggleButton,
  sdNumberToggleGroupLeft,
  sdNumberToggleGroupRight,
  sdToggleBtnGroupBox,
  sdNumberToggleButton,
  sdNumberToggleButton_dis,
} from '../../css/SeatBookingStyles';

const letters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
];

export const SeatDisplay = ({ count }) => {
  const [selectedSeat, setSelectedSeat] = useState(null);

  const handleOnClickNumber = (value) => {
    if (selectedSeat === value) {
      setSelectedSeat(null);
    } else {
      setSelectedSeat(value);
      console.log(value);
    }
  };
  return (
    <Box sx={sdOuterBox}>
      <img
        src='/images/icon/img-theater-screen.png'
        alt='img-theater-screen'
        style={{ marginTop: '2rem' }}
      />
      <br />
      <Box sx={{ marginTop: '1rem' }}>
        {letters.map((letter, idx) => (
          <Box sx={sdToggleBtnGroupBox}>
            <ToggleButton
              disableRipple
              key={idx}
              value={letter}
              sx={sdLetterToggleButton}
            >
              {letter}
            </ToggleButton>
            <ToggleButtonGroup
              exclusive
              value={selectedSeat}
              sx={sdNumberToggleGroupLeft}
            >
              {Array.from({ length: 5 }, (_, index) => {
                const leftIndex = index + 1;
                const value = letter + '' + leftIndex;
                if (leftIndex % 2 === 0 && count === 1) {
                  return (
                    <ToggleButton
                      key={value}
                      size='small'
                      disableRipple
                      disabled
                      value={value}
                      sx={sdNumberToggleButton_dis}
                      onClick={() => handleOnClickNumber(value)}
                    >
                      {leftIndex}
                    </ToggleButton>
                  );
                } else {
                  return (
                    <ToggleButton
                      key={value}
                      size='small'
                      disableRipple
                      value={value}
                      sx={sdNumberToggleButton}
                      onClick={() => handleOnClickNumber(value)}
                    >
                      {leftIndex}
                    </ToggleButton>
                  );
                }
              })}
            </ToggleButtonGroup>
            <ToggleButtonGroup exclusive value={selectedSeat}>
              {Array.from({ length: 9 }, (_, index) => {
                const centerIndex = index + 6;
                const value = letter + '' + centerIndex;
                if (centerIndex % 2 === 0 && count === 1) {
                  return (
                    <ToggleButton
                      key={value}
                      size='small'
                      disableRipple
                      disabled
                      value={value}
                      sx={sdNumberToggleButton_dis}
                      onClick={() => handleOnClickNumber(value)}
                    >
                      {centerIndex}
                    </ToggleButton>
                  );
                } else {
                  return (
                    <ToggleButton
                      key={value}
                      size='small'
                      disableRipple
                      value={value}
                      sx={sdNumberToggleButton}
                      onClick={() => handleOnClickNumber(value)}
                    >
                      {centerIndex}
                    </ToggleButton>
                  );
                }
              })}
            </ToggleButtonGroup>
            <ToggleButtonGroup
              exclusive
              value={selectedSeat}
              sx={sdNumberToggleGroupRight}
            >
              {Array.from({ length: 5 }, (_, index) => {
                const rightIndex = index + 15;
                const value = letter + '' + rightIndex;
                if (rightIndex % 2 === 0 && count === 1) {
                  return (
                    <ToggleButton
                      key={value}
                      size='small'
                      disableRipple
                      disabled
                      value={value}
                      sx={sdNumberToggleButton_dis}
                      onClick={() => handleOnClickNumber(value)}
                    >
                      {rightIndex}
                    </ToggleButton>
                  );
                } else {
                  return (
                    <ToggleButton
                      key={value}
                      size='small'
                      disableRipple
                      value={value}
                      sx={sdNumberToggleButton}
                      onClick={() => handleOnClickNumber(value)}
                    >
                      {rightIndex}
                    </ToggleButton>
                  );
                }
              })}
            </ToggleButtonGroup>
          </Box>
        ))}
      </Box>
    </Box>
  );
};
