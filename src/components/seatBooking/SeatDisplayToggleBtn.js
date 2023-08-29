import React, { useState } from 'react';

import Box from '@mui/material/Box';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

import {
  sdLetterToggleButton,
  sdNumberToggleGroupLeft,
  sdNumberToggleGroupRight,
  sdToggleBtnGroupBox,
  sdNumberToggleButton,
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

export const SeatDisplayToggleBtn = () => {
  //const count = 1;
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
    <>
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
              if (leftIndex % 3 === 0) {
                return (
                  <ToggleButton
                    key={value}
                    size='small'
                    disableRipple
                    disabled
                    value={value}
                    sx={sdNumberToggleButton}
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
              if (centerIndex % 3 === 0) {
                return (
                  <ToggleButton
                    key={value}
                    size='small'
                    disableRipple
                    disabled
                    value={value}
                    sx={sdNumberToggleButton}
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
              if (index + 15 === 17) {
                return (
                  <ToggleButton
                    key={value}
                    size='small'
                    disableRipple
                    disabled
                    value={value}
                    sx={sdNumberToggleButton}
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
    </>
  );
};
