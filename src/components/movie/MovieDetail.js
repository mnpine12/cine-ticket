import { useState } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import Typography from '@mui/material/Typography';
import {
  mdContOuterBox,
  mdContGridContainer,
  mdContGridItemText,
  mdContGridContainerOverlay,
  mdContGridItemImage,
  mdContImage,
  mdDataOuterBox,
  mdDataGridContainer,
  mdDataTitleTypo,
  mdDataContentTypo,
  mdDataGridItemText,
  mdDataGridItemInfo,
  mdDataGridItemTitle,
} from '../../css/styles';

import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import { styled } from '@mui/material/styles';

import { Header } from '../../layout/Header';

const CustomButton = styled(Button)({
  backgroundColor: 'none',
  color: 'black',
  paddingBottom: '10px',
  marginTop: '2rem',
  borderTop: 'none',
  borderLeft: 'none',
  borderRight: 'none',
  borderBottom: '1px solid #d3d3d3',
  borderRadius: 0,
  transition: 'border-color 0.2s',

  '&:hover': {
    borderBottomColor: '#151515',
    background: 'none',
  },
});

export const MovieDetail = () => {
  const [more, setMore] = useState(false);
  const movieTitle = '메가로돈 2';
  const movieEngTitle = 'Meg 2: The Trench';
  const reservationRate = 1;
  const cumulative = 1000;

  const handleOnClickMoreButton = () => {
    setMore(!more);
  };

  return (
    <>
      <Header type={'none'} />
      <Box sx={mdContOuterBox}>
        <Grid container sx={mdContGridContainer}>
          <div style={mdContGridContainerOverlay} />
          <Grid item xs={12} sm={8} sx={mdContGridItemText}>
            <Box sx={{ mt: 8, ml: 2 }}>
              <Typography
                variant='h3'
                sx={{ color: 'white', fontWeight: 'medium' }}
              >
                {movieTitle}
              </Typography>
              <Typography
                variant='h5'
                sx={{ color: 'white', fontWeight: 'medium' }}
              >
                {movieEngTitle}
              </Typography>
            </Box>
            <Box sx={{ mt: 32, ml: 2 }}>
              <Grid container sx={{ color: 'white' }}>
                <Grid item xs={12} sm={1.5}>
                  <InputLabel sx={{ color: 'white' }}>예매율</InputLabel>
                </Grid>
                <Grid item xs={12} sm={10.5} sx={{ color: 'white' }}>
                  <InputLabel sx={{ color: 'white' }}>누적관객수</InputLabel>
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={1.5}
                  sx={{ display: 'flex', alignItems: 'flex-end' }}
                >
                  <Typography variant='h4'>{reservationRate}</Typography>
                  <Typography variant='h6'>위</Typography>
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={10.5}
                  sx={{ display: 'flex', alignItems: 'flex-end' }}
                >
                  <Typography variant='h4'>{cumulative}</Typography>
                  <Typography variant='h6'>명</Typography>
                </Grid>
              </Grid>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4} sx={mdContGridItemImage}>
            <img
              style={mdContImage}
              src='images/poster01.jpg'
              alt='메가로돈 2 영화 포스터'
            />
            <Button
              variant='contained'
              sx={{ mt: 1, width: '75%', height: '10%' }}
            >
              예매
            </Button>
          </Grid>
        </Grid>
      </Box>
      <Box sx={mdDataOuterBox}>
        <Grid container sx={mdDataGridContainer}>
          <Grid item xs={12} sm={12} sx={mdDataGridItemTitle}>
            <Typography variant='text' sx={mdDataTitleTypo}>
              더 거대해진 메가로돈 VS 더 강력해진 제이슨 스타뎀
            </Typography>
          </Grid>
          {more && (
            <Grid item xs={12} sm={12} sx={mdDataGridItemText}>
              <Typography variant='text' sx={mdDataContentTypo}>
                지구 역사상 가장 거대한 최상위 포식자 ‘메가로돈’과 목숨 건 사투
                끝에 살아남은 다이버 ‘조나스’는 해양 연구소의 팀원들과 함께 심해
                탐사에 나서던 중 예기치 못한 사고로 해저 7,620m에 고립되고 만다.
                상상 초월의 위험이 도사린 그곳에서 그들이 마주하게 된 것은 더욱
                거대해진 ‘메가로돈’ 무리. 그들 앞에 또다시 모습을 드러낸
                메가로돈을 비롯해 거대한 촉수로 모든 것을 휘감는 대왕 문어 ‘메가
                옥토퍼스’와 육지와 바다를 넘나드는 육식 공룡 ‘스내퍼’까지. 더
                다양하고 강력해진 고대 생물들의 무자비한 공격이 쏟아지는 가운데
                강철 다이버 ‘조나스’는 사람들을 구하기 위해 다시 한번 맨몸으로
                ‘메가로돈’과의 맞대결에 나서는데…
              </Typography>
              <br />
              <br />
              <br />
              <Typography variant='text'>
                올여름 무더위를 집어삼킬 짜릿한 대결이 시작된다!
              </Typography>
            </Grid>
          )}
          <Grid item xs={12} sm={12}>
            <CustomButton
              disableRipple
              fullWidth
              endIcon={
                more === false ? (
                  <KeyboardArrowDownOutlinedIcon />
                ) : (
                  <KeyboardArrowUpOutlinedIcon />
                )
              }
              onClick={handleOnClickMoreButton}
            >
              더보기
            </CustomButton>
          </Grid>
          <Grid item xs={12} sm={12} sx={mdDataGridItemInfo}>
            <Typography variant='text' sx={mdDataContentTypo}>
              상영타입 : 2D(자막)
            </Typography>
            <br />
            <Typography variant='text' sx={mdDataContentTypo}>
              감독 : 벤 휘틀리 장르 : 액션 / 116 분 등급 : 12세이상관람가 개봉일
              : 2023.08.15
            </Typography>
            <br />
            <Typography variant='text' sx={mdDataContentTypo}>
              출연진 : 제이슨 스타뎀, 오경
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
