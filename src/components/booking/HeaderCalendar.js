import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';

import { DatePicker } from '@mui/x-date-pickers';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import 'dayjs/locale/ko';

import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

import {
  div_date_list_container,
  hcListDates,
  hcListDatesItemButton,
  hcTopCalendarBox,
  hcTopCalendarButton,
} from '../../css/BookingStyles';

// MUI datepicker 커스터마이징
const ButtonField = (props) => {
  const { setOpen, id, disabled, InputProps: { ref } = {} } = props;

  return (
    <Button
      id={id}
      disabled={disabled}
      ref={ref}
      sx={hcTopCalendarButton}
      onClick={() => setOpen?.((prev) => !prev)}
    >
      <CalendarMonthIcon sx={{ padding: 0 }} />
    </Button>
  );
};

// MUI datepicker 커스터마이징
const ButtonDatePicker = (props) => {
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
};

// 헤더 캘린더 6주치 날짜 가져와서 목록 보여주기
const getTwoWeeksFromToday = () => {
  const today = dayjs();
  const twoWeeksLater = today.add(6, 'week');
  const daysOfWeek = ['일', '월', '화', '수', '목', '금', '토'];

  const dates = [];
  const datesText = [];
  let currentDate = today.clone();
  while (currentDate.isBefore(twoWeeksLater)) {
    const formattedDate = currentDate.format('YYYY-MM-DD');
    const newFormattedDate = formattedDate.split('-');
    const dayOfWeek = daysOfWeek[currentDate.day()];
    const formattedDateWithDayText = `${newFormattedDate[2]}·${dayOfWeek}`;

    datesText.push(formattedDateWithDayText);
    dates.push(formattedDate);
    currentDate = currentDate.add(1, 'day');
  }

  return { dates, datesText };
};

// HeaderCalendar
export const HeaderCalendar = () => {
  const today = dayjs().format('YYYY-MM-DD');
  const [selectedCalendarDate, setSelectedCalendarDate] = useState(null);
  const [selectedDay, setSelectedDay] = useState(today);
  const [selectedDayIndex, setSelectedDayIndex] = useState(0);
  const [headerScrollPosition, setHeaderScrollPosition] = useState(0);
  const [isHeaderLeftDisabled, setIsHeaderLeftDisabled] = useState(true);
  const [isHeaderRightDisabled, setIsHeaderRightDisabled] = useState(false);

  const { dates, datesText } = getTwoWeeksFromToday();

  // 데이트피커 지난 날짜 선택 불가
  const isYesterday = (date) => {
    return dayjs(dayjs(date).format('YYYY-MM-DD')).isBefore(today);
  };

  // 날짜 목록에서 날짜 선택시
  const handleDayListClick = (date, index) => {
    setSelectedDayIndex(index);
    setSelectedDay(date);
  };

  // 데이트피커 클릭시 해당 날짜로 이동
  const handleCalendarDateClick = (newDate) => {
    setSelectedCalendarDate(newDate.format('YYYY-MM-DD'));
    setSelectedDayIndex(
      dates.findIndex((date) => date === newDate.format('YYYY-MM-DD')),
    );
  };

  const headerHandleScroll = (direction) => {
    const scrollStep = 35.225;
    const container = document.getElementById('date-list-container');

    let newScrollPosition =
      direction === 'prev'
        ? headerScrollPosition - scrollStep
        : headerScrollPosition + scrollStep;

    if (newScrollPosition < 0) {
      newScrollPosition = 0;
    } else if (newScrollPosition > 986.3) {
      newScrollPosition = 986.3;
    }

    setHeaderScrollPosition(newScrollPosition);

    // 버튼 활성/비활성 상태 업데이트
    setIsHeaderLeftDisabled(newScrollPosition === 0);
    setIsHeaderRightDisabled(newScrollPosition === 986.3);
    container.scrollLeft = newScrollPosition;
  };

  return (
    <Box sx={hcTopCalendarBox}>
      <Button
        disableRipple
        disabled={isHeaderLeftDisabled}
        onClick={() => headerHandleScroll('prev')}
        sx={hcTopCalendarButton}
      >
        <NavigateBeforeIcon sx={{ padding: 0 }} />
      </Button>
      <div id='date-list-container' style={div_date_list_container}>
        <List sx={hcListDates}>
          {dates.map((date, index) => (
            <ListItemButton
              key={index}
              value={selectedDay}
              selected={selectedDayIndex === index}
              onClick={() => handleDayListClick(date, index)}
              sx={{
                ...hcListDatesItemButton,
                color: datesText[index].includes('일')
                  ? 'red'
                  : datesText[index].includes('토')
                  ? 'blue'
                  : 'inherit',
                transform: `translateX(-${headerScrollPosition}px)`,
              }}
              disableRipple
            >
              {datesText[index]}
            </ListItemButton>
          ))}
        </List>
      </div>
      <Button
        disableRipple={true}
        disabled={isHeaderRightDisabled}
        onClick={() => headerHandleScroll('next')}
        sx={hcTopCalendarButton}
      >
        <NavigateNextIcon sx={{ padding: 0 }} />
      </Button>
      <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale='ko'>
        <ButtonDatePicker
          value={selectedCalendarDate}
          onChange={(newDate) => handleCalendarDateClick(newDate)}
          isYesterday={isYesterday}
        />
      </LocalizationProvider>
    </Box>
  );
};
