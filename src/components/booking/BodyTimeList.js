import React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import Typography from '@mui/material/Typography';
import {
  bctTimeListBoxTypo1,
  bctTimeListBoxTypo2,
  bctTimeListBoxTypo3,
  bctTimeListItemButton,
  bctTimeListOuterList,
} from '../../css/BookingStyles';

const movies = [
  { title: '오펜하이머', ageRating: '15세', screeningType: '2D' },
  { title: '메가로돈2', ageRating: '15세' },
  { title: '콘크리트 유토피아', ageRating: '15세' },
  { title: '밀수', ageRating: '15세' },
  { title: '미션 임파서블: 데드 레코닝 PART ONE', ageRating: '15세' },
  { title: '엘리멘탈', ageRating: 'ALL' },
  { title: '명탐정 코난', ageRating: '12세' },
  { title: '[2023 베로나 오페라 페스티벌] 토스카', ageRating: '12세' },
  { title: '볼코노프 대위 탈출하다', ageRating: '15세' },
  { title: '고대 이집트 세계관과 불변의 상징들', ageRating: 'ALL' },
  { title: '[존 크랑코’s 발레 3부작] 로미오와 줄리엣', ageRating: 'ALL' },
  { title: '고대 이집트 문명의 빛나는 유산', ageRating: 'ALL' },
  { title: '스파이더맨: 어크로스 더 유니버스', ageRating: 'ALL' },
  { title: '강변의 무코리타', ageRating: '12세' },
  { title: '지옥만세', ageRating: '12세' },
];

const movieTimes = [
  {
    area: '서울',
    cinema: '강남',
    theaterName: '1관',
    playDate: '2023-08-24',
    playStartTime: '09:50',
    playEndTime: '13:00',
    id: 0,
    hasSubtitles: '자막',
    timeSlotPrice: '조조',
  },
  {
    area: '서울',
    cinema: '강남',
    theaterName: '2관',
    playDate: '2023-08-24',
    playStartTime: '10:45',
    playEndTime: '13:55',
    id: 0,
    hasSubtitles: '자막',
    timeSlotPrice: '일반',
  },
  {
    area: '경기',
    cinema: '고양스타필드',
    theaterName: '1관',
    playDate: '2023-08-24',
    playStartTime: '9:50',
    playEndTime: '13:00',
    id: 0,
    hasSubtitles: '자막',
    timeSlotPrice: '조조',
  },
];

const selected = {
  arrMovieId: ['0'],
  area1: '서울',
  area2: '',
  area3: '',
  cinema1: '강남',
  cinema2: '',
  cinema3: '',
  movieNo1: '0',
  movieNo2: '',
  movieNo3: '',
};

export const BodyTimeList = () => {
  const filteredMovieTimes = movieTimes.filter(
    (item, index) =>
      item.area === selected.area1 && item.cinema === selected.cinema1,
  );

  return (
    <List sx={bctTimeListOuterList}>
      {filteredMovieTimes.map((item, index) => (
        <ListItemButton key={index} disableRipple sx={bctTimeListItemButton}>
          <Box sx={{ width: '5%', paddingLeft: '0.5rem' }}>
            {item.timeSlotPrice === '조조' && (
              <img
                src='/images/icon/ico-greeting-option-sun.png'
                alt={item.timeSlotPrice}
              />
            )}
          </Box>
          <Box sx={{ width: '10%', paddingLeft: '0.5rem', textAlign: 'right' }}>
            <Typography sx={bctTimeListBoxTypo1}>
              {item.playStartTime}
            </Typography>
            <Typography sx={bctTimeListBoxTypo2}>
              ~{item.playEndTime}
            </Typography>
          </Box>
          <Box sx={{ width: '70%', paddingLeft: '1.5rem', textAlign: 'left' }}>
            <Typography sx={bctTimeListBoxTypo3}>{movies[0].title}</Typography>
            <Typography sx={bctTimeListBoxTypo2}>
              {movies[0].screeningType}
              {`(` + item.hasSubtitles + `)`}
            </Typography>
          </Box>
          <Box
            sx={{ width: '15%', paddingRight: '0.5rem', textAlign: 'right' }}
          >
            <Typography sx={bctTimeListBoxTypo2}>
              {item.cinema}
              <br />
              {item.theaterName}
            </Typography>
            <Typography sx={bctTimeListBoxTypo2}>232/232</Typography>
          </Box>
        </ListItemButton>
      ))}
    </List>
  );
};
