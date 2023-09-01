import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';

import {
  bcmContainerBox,
  bcmGridItem,
  bcmGridItemList,
  bcmGridItemTypo,
  bcmGridListItemImage,
  bcmInnerContainerBox,
  bcmListItemButton,
} from '../../css/BookingStyles';

import { BodyMovieListButton } from './BodyMovieListButton';
import { FooterMovieImage } from './FooterMovieImage';
import { poster } from '../ImgPath';

const movies = [
  { id: 0, title: '오펜하이머', ageRating: '15세' },
  { id: 1, title: '메가로돈2', ageRating: '15세' },
  { id: 2, title: '콘크리트 유토피아', ageRating: '15세' },
  { id: 3, title: '밀수', ageRating: '15세' },
  { id: 4, title: '미션 임파서블: 데드 레코닝 PART ONE', ageRating: '15세' },
  { id: 5, title: '엘리멘탈', ageRating: 'ALL' },
  { id: 6, title: '명탐정 코난', ageRating: '12세' },
  { id: 7, title: '그녀의 취미생활', ageRating: '15세' },
  { id: 8, title: '볼코노프 대위 탈출하다', ageRating: '15세' },
  { id: 9, title: '고대 이집트 세계관과 불변의 상징들', ageRating: 'ALL' },
  {
    id: 10,
    title: '[존 크랑코’s 발레 3부작] 로미오와 줄리엣',
    ageRating: 'ALL',
  },
  { id: 11, title: '고대 이집트 문명의 빛나는 유산', ageRating: 'ALL' },
  { id: 12, title: '아만다', ageRating: '15' },
  { id: 13, title: '강변의 무코리타', ageRating: '12세' },
  { id: 14, title: '지옥만세', ageRating: '12세' },
];

export const BodyMovie = ({ movieId }) => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [selectedMovies, setSelectedMovies] = useState([]);
  const [imgUrl, setImgUrl] = useState([]);

  // 영화 선택 및 삭제
  const handleMovieClick = (index) => {
    const imgSrc = poster[`poster${index}`];

    if (!selectedMovies.includes(index) && selectedMovies.length < 3) {
      setSelectedMovies([...selectedMovies, index]);
      setImgUrl([...imgUrl, imgSrc]);
    } else {
      setSelectedMovies(selectedMovies.filter((item) => item !== index));
      setImgUrl(imgUrl.filter((item) => item !== imgSrc));
    }
  };

  // 이미지 삭제 버튼으로 영화 삭제
  const handelMovieDelBtnClick = (index) => {
    const imgSrc = '/images/poster/poster_' + index + '.jpg';

    setSelectedMovies(selectedMovies.filter((item) => item !== index));
    setImgUrl(imgUrl.filter((item) => item !== imgSrc));
  };

  return (
    <Box sx={bcmContainerBox}>
      <Box sx={bcmInnerContainerBox}>
        <Grid container>
          <Grid item xs={12} sm={12} sx={bcmGridItemTypo}>
            <Typography variant='text'>영화</Typography>
          </Grid>
          <Grid item xs={12} sm={12}>
            <List sx={bcmGridItemList}>
              <ListItemButton
                key={0}
                selected={selectedMenu === 0}
                value={selectedMenu}
                onClick={() => setSelectedMenu(0)}
                sx={bcmListItemButton}
                disableRipple
              >
                전체
              </ListItemButton>
              <ListItemButton
                key={1}
                selected={selectedMenu === 1}
                value={selectedMenu}
                onClick={() => setSelectedMenu(1)}
                sx={bcmListItemButton}
                disableRipple
              >
                큐레이션
              </ListItemButton>
            </List>
          </Grid>
          <Grid item xs={12} sm={12} sx={bcmGridItem}>
            <List sx={bcmGridListItemImage}>
              {movies.map((movie, index) => (
                <BodyMovieListButton
                  key={index}
                  movie={movie.title}
                  index={index}
                  selectedMovies={selectedMovies}
                  handleMovieClick={handleMovieClick}
                  ageRating={movie.ageRating}
                  movieId={movieId}
                />
              ))}
            </List>
          </Grid>
          <Grid item xs={12} sm={12} sx={bcmGridItem}>
            <FooterMovieImage
              selectedMovies={selectedMovies}
              imgUrl={imgUrl}
              handelMovieDelBtnClick={handelMovieDelBtnClick}
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
