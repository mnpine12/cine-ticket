import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import ToggleButton from '@mui/material/ToggleButton';

import {
  sdOuterBox,
  sdLetterToggleButton,
  sdToggleBtnGroupBox,
  sdNumberToggleButton,
  sdNumberToggleButton_dis,
} from '../../css/SeatBookingStyles';
import { ToggleButtonGroup } from '@mui/material';

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
  const [seatList, setSeatList] = useState([]);

  useEffect(() => {
    if (count === 0) {
      setSeatList([]);
    }
  }, [count]);

  const handleOnClickNumber = (value) => {
    if (selectedSeat === value) {
      setSelectedSeat(null);
    } else {
      setSelectedSeat(value);
    }
  };

  const handleOnChange = (event) => {
    if (seatList.includes(event.target.value)) {
      setSeatList(seatList.filter((item) => item !== event.target.value));
    } else {
      if (seatList.length < count) {
        setSeatList([...seatList, event.target.value]);
      }
    }
  };

  return (
    <Box sx={sdOuterBox}>
      <img
        src='/images/icon/img-theater-screen.png'
        alt='img-theater-screen'
        style={{ marginTop: '1rem' }}
      />
      <br />
      <Box display={'flex'} sx={{ marginTop: '1rem', marginBottom: '1rem' }}>
        <Box sx={{ paddingLeft: '1rem' }}>
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
            </Box>
          ))}
        </Box>
        <Box
          sx={{
            paddingRight: '3rem',
          }}
        >
          {letters.map((letter, idx) => {
            if (count === 0) {
              return (
                <ToggleButtonGroup key={idx}>
                  {Array.from({ length: 19 }, (_, index) => {
                    const label = index + 1;
                    const text = letter + '' + label;
                    return (
                      <ToggleButton
                        disableRipple
                        key={text}
                        value={text}
                        onClick={() => handleOnClickNumber(text)}
                        sx={sdNumberToggleButton_dis}
                      >
                        {label}
                      </ToggleButton>
                    );
                  })}
                </ToggleButtonGroup>
              );
            } else {
              return (
                <ToggleButtonGroup
                  key={idx}
                  onChange={(value) => handleOnChange(value)}
                  value={seatList}
                >
                  {Array.from({ length: 19 }, (_, index) => {
                    const label = index + 1;
                    const text = letter + '' + label;
                    return (
                      <ToggleButton
                        disableRipple
                        key={text}
                        value={text}
                        onClick={() => handleOnClickNumber(text)}
                        sx={sdNumberToggleButton}
                      >
                        {label}
                      </ToggleButton>
                    );
                  })}
                </ToggleButtonGroup>
              );
            }
          })}
        </Box>
      </Box>
    </Box>
  );
};
