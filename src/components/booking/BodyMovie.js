import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import {
  bcmContainerBox,
  bcmGridItem,
  bcmGridItemImage,
  bcmGridItemImageBox_none,
  bcmGridItemImgTypo,
  bcmGridItemList,
  bcmGridItemTypo,
  bcmGridListItemImage,
  bcmImage,
  bcmInnerContainerBox,
  bcmListItemButton,
} from '../../css/BookingStyles';
import { Grid, List, ListItemButton } from '@mui/material';
import { BodyMovieListButton } from './BodyMovieListButton';

const movies = [
  { title: '오펜하이머', ageRating: '15세' },
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

export const BodyMovie = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [selectedMovies, setSelectedMovies] = useState([]);
  const [imgUrl, setImgUrl] = useState([]);

  //영화 선택
  const handleMovieClick = (index) => {
    const imgSrc = '/images/poster/poster_' + index + '.jpg';

    if (!selectedMovies.includes(index) && selectedMovies.length < 3) {
      setSelectedMovies([...selectedMovies, index]);
      setImgUrl([...imgUrl, imgSrc]);
    } else {
      setSelectedMovies(selectedMovies.filter((item) => item !== index));
      setImgUrl(imgUrl.filter((item) => item !== imgSrc));
    }
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
                selected={selectedMenu === 0}
                value={selectedMenu}
                onClick={() => setSelectedMenu(0)}
                sx={bcmListItemButton}
                disableRipple
              >
                전체
              </ListItemButton>
              <ListItemButton
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
                  movie={movie.title}
                  index={index}
                  selectedMovies={selectedMovies}
                  handleMovieClick={handleMovieClick}
                  ageRating={movie.ageRating}
                />
              ))}
            </List>
          </Grid>
          <Grid item xs={12} sm={12} sx={bcmGridItem}>
            <Box
              sx={{
                ...bcmGridItemImageBox_none,
                border:
                  selectedMovies.length !== 0 ? 'none' : '1px solid #d8d9db',
              }}
            >
              {selectedMovies.length === 0 ? (
                <Typography sx={bcmGridItemImgTypo}>
                  모든영화
                  <br /> 목록에서 영화를 선택하세요.
                </Typography>
              ) : (
                <Grid container sx={bcmGridItemImage}>
                  {selectedMovies.length === 1 ? (
                    <>
                      <Grid item xs={12} sm={4}>
                        <img
                          src={imgUrl[0]}
                          alt={selectedMovies[0]}
                          style={bcmImage}
                        />
                      </Grid>
                      <Grid item xs={12} sm={4}>
                        <img
                          src='/images/poster/poster_none.png'
                          alt='선택되지 않음'
                          style={bcmImage}
                        />
                      </Grid>
                      <Grid item xs={12} sm={4}>
                        <img
                          src='/images/poster/poster_none.png'
                          alt='선택되지 않음'
                          style={bcmImage}
                        />
                      </Grid>
                    </>
                  ) : selectedMovies.length === 2 ? (
                    <>
                      <Grid item xs={12} sm={4}>
                        <img
                          src={imgUrl[0]}
                          alt={selectedMovies[0]}
                          style={bcmImage}
                        />
                      </Grid>
                      <Grid item xs={12} sm={4}>
                        <img
                          src={imgUrl[1]}
                          alt={selectedMovies[1]}
                          style={bcmImage}
                        />
                      </Grid>
                      <Grid item xs={12} sm={4}>
                        <img
                          src='/images/poster/poster_none.png'
                          alt='선택되지 않음'
                          style={bcmImage}
                        />
                      </Grid>
                    </>
                  ) : (
                    <>
                      <Grid item xs={12} sm={4}>
                        <img
                          src={imgUrl[0]}
                          alt={selectedMovies[0]}
                          style={bcmImage}
                        />
                      </Grid>
                      <Grid item xs={12} sm={4}>
                        <img
                          src={imgUrl[1]}
                          alt={selectedMovies[1]}
                          style={bcmImage}
                        />
                      </Grid>
                      <Grid item xs={12} sm={4}>
                        <img
                          src={imgUrl[2]}
                          alt={selectedMovies[2]}
                          style={bcmImage}
                        />
                      </Grid>
                    </>
                  )}
                </Grid>
              )}
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
