import React, { useState } from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import { poster } from '../ImgPath';

import {
  ssiBodyGridItemBox,
  ssiBodyGridItem_seatBox,
  ssiBodyGridItem_image,
  ssiBodyGridItem_seat,
  ssiFontStyle,
  ssiFooterBtn_L,
  ssiFooterBtn_R,
  ssiImg,
  ssiInnerBox,
  ssiOuterBox,
  ssiTopBox,
  ssiTopBoxIcon,
  ssiBodyGridItem_selected,
  ssiBodyGridItem_seatBox_none,
  ssiFontStyle2,
  ssiFooterGridItem,
  ssiFontStyle3,
} from '../../css/SeatBookingStyles';

const movie = {
  title: '오펜하이머',
  screeningType: '2D',
  hasSubtitles: '자막',
  ageRating: '15세',
  cinema: '강남',
  theaterName: ['1관', '3관', '1관', '3관'],
  playDate: '2023-08-31-목요일',
  playStartTime: ['09:50', '12:25', '13:20', '15:55'],
  playEndTime: ['13:00', '15:35', '16:30', '19:05'],
};

export const SeatSelectorInfo = () => {
  const count = 1;
  const [selectedTime, setSelectedTime] = useState(0);
  const selectedSeats = ['A1', '', '', '', '', '', '', ''];
  const imgIcon = `/images/icon/${movie.ageRating.replace('세', '')}_46x46.png`;

  return (
    <Box sx={ssiOuterBox}>
      <Box sx={ssiInnerBox}>
        <Grid container sx={ssiTopBox}>
          <Grid
            item
            xs={12}
            sm={2}
            sx={{
              paddingRight: '5px',
              display: 'flex',
              justifyContent: 'right',
            }}
          >
            <img src={imgIcon} alt={movie.ageRating} style={ssiTopBoxIcon} />
          </Grid>
          <Grid item xs={12} sm={10} sx={{ margin: 'auto' }}>
            <InputLabel sx={{ color: '#ffffff' }}>{movie.title}</InputLabel>
            <InputLabel sx={ssiFontStyle}>
              {movie.screeningType + `(` + movie.hasSubtitles + `)`}
            </InputLabel>
          </Grid>
          <Grid item xs={12} sm={12}>
            <hr style={{ opacity: 0.1 }} />
          </Grid>
          <Grid item xs={12} sm={8}>
            <InputLabel sx={ssiFontStyle}>
              {movie.cinema}
              <br />
              {movie.theaterName[selectedTime]}
              <br />
              {movie.playDate}
              <br />
            </InputLabel>
          </Grid>
          <Grid item>
            <img src={poster.poster0} alt={movie.title} style={ssiImg} />
          </Grid>
          <Grid item xs={12} sm={12}>
            <hr style={{ opacity: 0.1 }} />
          </Grid>
          <Grid item xs={12} sm={6} sx={ssiBodyGridItem_image}>
            <Box sx={ssiBodyGridItemBox}>
              <Box
                sx={{
                  width: '15px',
                  height: '15px',
                  background: '#503396',
                  marginRight: '5px',
                }}
              />
              <InputLabel sx={ssiFontStyle}>선택</InputLabel>
            </Box>
            <Box sx={ssiBodyGridItemBox}>
              <Box
                sx={{
                  width: '15px',
                  height: '15px',
                  backgroundImage:
                    'url("/images/icon/bg-seat-condition-finish-s.png")',
                  backgroundSize: 'cover',
                  marginRight: '5px',
                }}
              />
              <InputLabel sx={ssiFontStyle}>예매완료</InputLabel>
            </Box>
            <Box sx={ssiBodyGridItemBox}>
              <Box
                sx={{
                  width: '15px',
                  height: '15px',
                  backgroundImage:
                    'url("/images/icon/bg-seat-condition-impossible.png")',
                  backgroundSize: 'cover',
                  marginRight: '5px',
                }}
              />
              <InputLabel sx={ssiFontStyle}>선택불가</InputLabel>
            </Box>
            <Box sx={ssiBodyGridItemBox}>
              <Box
                sx={{
                  width: '15px',
                  height: '15px',
                  background: '#747474',
                  marginRight: '5px',
                }}
              />
              <InputLabel sx={ssiFontStyle}>일반</InputLabel>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} sx={ssiBodyGridItem_seat}>
            <InputLabel sx={ssiFontStyle}>선택좌석</InputLabel>
            <Grid container sx={ssiBodyGridItem_selected}>
              <Grid item xs={9}>
                {Array.from(
                  { length: Math.ceil(selectedSeats.length / 2) },
                  (_, row) => (
                    <Grid container item xs={12} key={row}>
                      {Array.from({ length: 2 }, (_, col) => {
                        const index = row * 2 + col;
                        const item = selectedSeats[index];
                        return (
                          <Grid item xs={6} key={index}>
                            <Box
                              sx={
                                item !== ''
                                  ? ssiBodyGridItem_seatBox
                                  : ssiBodyGridItem_seatBox_none
                              }
                            >
                              {item !== '' ? item : ' - '}
                            </Box>
                          </Grid>
                        );
                      })}
                    </Grid>
                  ),
                )}
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={6} sx={ssiFooterGridItem}>
            <InputLabel sx={ssiFontStyle}>성인 {count}</InputLabel>
            <InputLabel sx={ssiFontStyle2}>최종결제금액</InputLabel>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            sx={{ ...ssiFooterGridItem, alignItems: 'flex-end' }}
          >
            <Box
              display={'flex'}
              alignItems={'center'}
              justifyContent={'flex-end'}
            >
              <InputLabel sx={ssiFontStyle3}>8,000</InputLabel>
              <InputLabel sx={ssiFontStyle2}>&nbsp;원</InputLabel>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} sx={{ marginTop: '10px' }}>
            <Button
              fullWidth
              disableRipple
              disableElevation={true}
              variant='contained'
              sx={ssiFooterBtn_L}
            >
              이전
            </Button>
          </Grid>
          <Grid item xs={12} sm={6} sx={{ marginTop: '10px' }}>
            <Button
              fullWidth
              disableRipple
              disableElevation={true}
              variant='contained'
              sx={ssiFooterBtn_R}
            >
              다음
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
