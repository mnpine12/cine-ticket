// import { useState } from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { DatePicker } from '@mui/x-date-pickers';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import 'dayjs/locale/ko';

import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';

import { bmTopCalendarBox, bmTopCalendarButton } from '../../css/BookingStyles';

export const HeaderCalendar = () => {
  const today = dayjs();

  const isYesterday = (date) => {
    return dayjs(dayjs(date).format('YYYY-MM-DD')).isBefore(
      today.format('YYYY-MM-DD'),
    );
  };

  return (
    <Box sx={bmTopCalendarBox}>
      <Button disableRipple={true} sx={bmTopCalendarButton}>
        <NavigateBeforeIcon />
      </Button>
      <Button disableRipple={true} sx={bmTopCalendarButton}>
        <NavigateNextIcon />
      </Button>
      <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale='ko'>
        <DatePicker defaultValue={today} shouldDisableDate={isYesterday} />
      </LocalizationProvider>
    </Box>
  );
};
