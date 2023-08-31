import React, { useState } from 'react';
import Box from '@mui/material/Box';
import ToggleButton from '@mui/material/ToggleButton';

import {
  sdOuterBox,
  sdLetterToggleButton,
  sdToggleBtnGroupBox,
  sdNumberToggleButton,
  sdNumberToggleButton_dis,
  sdNumberToggleButton_selected,
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
  const [hoveredSeat, setHoveredSeat] = useState(null);

  const renderToggleButton = (text, label, index, count, letterIndex) => {
    const isEven = index % 2 === 0; //홀수인지 짝수인지 체크
    const isDisabled = isEven && count === 1; //1인석일 경우 짝수좌석 비활성화용
    const isHovered =
      hoveredSeat === text || hoveredSeat === letters[letterIndex] + '' + index;

    const handleOnClickNumber = (text) => {
      setSelectedSeat(text === selectedSeat ? null : text);
    };

    const handleMouseEnter = (text) => {
      setHoveredSeat(text);
    };

    const handleMouseLeave = () => {
      setHoveredSeat(null);
    };

    return (
      <ToggleButton
        key={text}
        size='small'
        disableRipple
        disabled={isDisabled}
        value={selectedSeat}
        sx={
          isHovered
            ? sdNumberToggleButton_selected
            : isDisabled
            ? sdNumberToggleButton_dis
            : sdNumberToggleButton
        }
        onClick={() => handleOnClickNumber(text)}
        onMouseEnter={() => handleMouseEnter(text)}
        onMouseLeave={handleMouseLeave}
      >
        {label}
      </ToggleButton>
    );
  };

  return (
    <Box sx={sdOuterBox}>
      <img
        src='/images/icon/img-theater-screen.png'
        alt='img-theater-screen'
        style={{ marginTop: '2rem' }}
      />
      <br />
      <Box sx={{ marginTop: '1rem', marginBottom: '2rem' }}>
        {letters.map((letter, idx) => (
          <Box sx={{ display: 'flex' }}>
            <Box sx={sdToggleBtnGroupBox} key={idx}>
              <ToggleButton
                disableRipple
                key={idx}
                value={letter}
                sx={sdLetterToggleButton}
              >
                {letter}
              </ToggleButton>
            </Box>
            <Box>
              {Array.from({ length: 19 }, (_, index) => {
                const text = letter + '' + (index + 1);
                const label = index + 1;
                return renderToggleButton(text, label, index, count, idx);
              })}
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};
