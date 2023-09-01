import { useMemo, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';

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
  mdButton,
} from '../../css/MovieStyles';

import Header from '../../layout/Header';
import movie from '../../movie.json';
import { bgImage } from '../ImgPath';

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
  const navigate = useNavigate();
  const { movieId } = useParams();
  const [more, setMore] = useState(false);
  const movieTitle = movie[movieId].title;
  const movieEngTitle = movie[movieId].engTitle;
  const rank = movie[movieId].rank;
  const cumulative = movie[movieId].cumulative;
  const profileImg = '/images/profile/profile_' + movieId + '.jpg';
  const backgroundImageUrl = bgImage[`bgImage${movieId}`];
  const cachedHeader = useMemo(() => <Header type={'none'} />, []);

  const handleOnClickMoreButton = () => {
    setMore(!more);
  };

  const handleOnClick = (movieId) => {
    navigate(`/booking/${movieId}`);
  };

  return (
    <>
      {cachedHeader}
      <Box sx={mdContOuterBox}>
        <Grid container sx={mdContGridContainer(backgroundImageUrl)}>
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
                  <Typography variant='h4'>{rank}</Typography>
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
              src={profileImg}
              alt={movie[movieId].title}
            />
            <Button
              variant='contained'
              sx={mdButton}
              onClick={() => handleOnClick(movieId)}
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
              {movie[movieId].summaryTitle}
            </Typography>
          </Grid>
          {more && (
            <Grid item xs={12} sm={12} sx={mdDataGridItemText}>
              <Typography variant='text' sx={mdDataContentTypo}>
                {movie[movieId].summaryContents}
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
            {movie[movieId].screeningType !== '' ? (
              <Typography variant='text' sx={mdDataContentTypo}>
                상영타입 : {movie[movieId].screeningType}
              </Typography>
            ) : (
              <Typography variant='text' sx={mdDataContentTypo}>
                상영타입 : {movie[movieId].screeningType}(
                {movie[movieId].hasSubtitles})
              </Typography>
            )}
            <br />
            <Typography variant='text' sx={mdDataContentTypo}>
              감독 : 벤 휘틀리 <br></br>
              장르 : 액션 / {movie[movieId].duration} 분 &nbsp; 등급 :{' '}
              {movie[movieId].ageRating}이상관람가 &nbsp; 개봉일 :{' '}
              {movie[movieId].releaseDate}
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
