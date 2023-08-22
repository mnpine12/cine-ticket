import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { DatePicker } from '@mui/x-date-pickers';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import 'dayjs/locale/ko';

import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

import {
  bmListDates,
  bmListDatesItemButton,
  bmTopCalendarBox,
  bmTopCalendarButton,
} from '../../css/BookingStyles';

import { Grid, List, ListItemButton } from '@mui/material';

// MUI datepicker 커스터마이징
function ButtonField(props) {
  const { setOpen, id, disabled, InputProps: { ref } = {} } = props;

  return (
    <Button
      id={id}
      disabled={disabled}
      ref={ref}
      sx={bmTopCalendarButton}
      onClick={() => setOpen?.((prev) => !prev)}
    >
      <CalendarMonthIcon />
    </Button>
  );
}

// MUI datepicker 커스터마이징
function ButtonDatePicker(props) {
  const [open, setOpen] = useState(false);
  const isYesterday = props.isYesterday;

  return (
    <DatePicker
      slots={{ field: ButtonField, ...props.slots }}
      slotProps={{ field: { setOpen } }}
      {...props}
      open={open}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      shouldDisableDate={isYesterday}
    />
  );
}

const getTwoWeeksFromToday = () => {
  const today = dayjs();
  const twoWeeksLater = today.add(2, 'week');
  const daysOfWeek = ['일', '월', '화', '수', '목', '금', '토'];

  const dates = [];
  const datesText = [];
  let currentDate = today.clone();
  while (currentDate.isBefore(twoWeeksLater)) {
    const formattedDate = currentDate.format('YYYY-MM-DD');
    const formattedDate2 = formattedDate.split('-');
    const dayOfWeek = daysOfWeek[currentDate.day()];
    const formattedDateWithDay = `${formattedDate}-${dayOfWeek}`;
    const formattedDateWithDayText = `${formattedDate2[2]}·${dayOfWeek}`;

    // 객체로 날짜 정보 포장하여 배열에 추가
    const dateObject = {
      date: formattedDateWithDay,
      dateText: formattedDateWithDayText,
    };

    datesText.push(formattedDateWithDayText);
    dates.push(dateObject);
    currentDate = currentDate.add(1, 'day');
  }

  return { dates, datesText };
};

// HeaderCalendar
export const HeaderCalendar = () => {
  const today = dayjs();
  const [selectedCalendarDate, setSelectedCalendarDate] = useState(null);
  const [selectedDay, setSelectedDay] = useState(0);

  const { dates, datesText } = getTwoWeeksFromToday();

  const isYesterday = (date) => {
    return dayjs(dayjs(date).format('YYYY-MM-DD')).isBefore(
      today.format('YYYY-MM-DD'),
    );
  };

  const handleDayListClick = (event, index) => {
    setSelectedDay(index);
  };

  return (
    <Box sx={bmTopCalendarBox}>
      <Button disableRipple={true} sx={bmTopCalendarButton}>
        <NavigateBeforeIcon />
      </Button>
      <List sx={bmListDates}>
        {dates.map((date, index) => (
          <ListItemButton
            key={index}
            selected={selectedDay === index}
            onClick={(event) => handleDayListClick(event, index)}
            sx={bmListDatesItemButton}
          >
            {datesText[index]}
          </ListItemButton>
        ))}
      </List>
      <Button disableRipple={true} sx={bmTopCalendarButton}>
        <NavigateNextIcon />
      </Button>
      <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale='ko'>
        <ButtonDatePicker
          value={selectedCalendarDate}
          onChange={(newDate) =>
            setSelectedCalendarDate(newDate.format('YYYY-MM-DD'))
          }
          isYesterday={isYesterday}
        />
      </LocalizationProvider>
    </Box>
  );
};
