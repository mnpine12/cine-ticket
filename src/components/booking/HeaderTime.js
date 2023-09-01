import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';

import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';

import {
  div_time_list_container,
  hctContainerBox,
  hctListTimes,
  hctTimeListButton,
  hctTimeListButtonImg,
} from '../../css/BookingStyles';

export const HeaderTime = () => {
  const [selectedTimeIndex, setSelectedTimeIndex] = useState(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isLeftDisabled, setIsLeftDisabled] = useState(true);
  const [isRightDisabled, setIsRightDisabled] = useState(false);

  const playStartTime = '9:50';
  const startTime = parseInt(playStartTime.slice(0, 1));

  useEffect(() => {
    setSelectedTimeIndex(startTime);
    scrollToCenter(startTime);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // useEffect(() => {
  //   scrollToCenter(selectedTimeIndex);
  // }, []); //요일이 바뀔때마다 시간 위치 재설정

  const handleOnClickStartTime = (index) => {
    setSelectedTimeIndex(index);
  };

  // startTime 시간을 리스트 가운데로 옮기기
  const scrollToCenter = (startTime) => {
    const scrollStep = 20;
    let centerScroll = 0;
    const container = document.getElementById('time-list-container');

    if (startTime < 5 && startTime > 0) {
      centerScroll = 0;
    } else if (startTime > 24) {
      centerScroll = 380;
    } else {
      centerScroll = scrollStep * (startTime - 5);
    }
    setScrollPosition(centerScroll);
    setIsLeftDisabled(centerScroll === 0);
    setIsRightDisabled(centerScroll === 380);
    container.scrollLeft = centerScroll;
  };

  // 시간 버튼으로 스크롤 넘기기
  const handleScroll = (direction) => {
    const scrollStep = 20;
    const container = document.getElementById('time-list-container');

    let newScrollPosition =
      direction === 'prev'
        ? scrollPosition - scrollStep
        : scrollPosition + scrollStep;

    if (newScrollPosition < 0) {
      newScrollPosition = 0;
    } else if (newScrollPosition > 380) {
      newScrollPosition = 380;
    }

    setScrollPosition(newScrollPosition);
    // 버튼 활성/비활성 상태 업데이트
    setIsLeftDisabled(newScrollPosition === 0);
    setIsRightDisabled(newScrollPosition === 380);
    container.scrollLeft = newScrollPosition;
  };

  return (
    <div style={hctContainerBox}>
      <Button
        disableRipple
        disabled={isLeftDisabled}
        onClick={() => handleScroll('prev')}
        sx={hctTimeListButtonImg}
      >
        <NavigateBeforeIcon sx={{ padding: 0 }} />
      </Button>
      <div id='time-list-container' style={div_time_list_container}>
        <List
          sx={{
            ...hctListTimes,
            transform: `translateX(-${scrollPosition}px)`,
          }}
        >
          {Array.from({ length: 29 }, (_, index) => (
            <ListItemButton
              key={index}
              disableRipple
              disabled={startTime > index ? true : false}
              selected={selectedTimeIndex === index}
              onClick={() => handleOnClickStartTime(index)}
              sx={hctTimeListButton}
            >
              {index < 10 ? `0${index}` : index}
            </ListItemButton>
          ))}
        </List>
      </div>
      <Button
        disableRipple
        disabled={isRightDisabled}
        onClick={() => handleScroll('next')}
        sx={hctTimeListButtonImg}
      >
        <NavigateNextIcon sx={{ padding: 0 }} />
      </Button>
    </div>
  );
};
