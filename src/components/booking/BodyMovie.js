import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import {
  bcmContainerBox,
  bcmGridItem,
  bcmGridItemList,
  bcmGridItemTypo,
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
  { title: '엘리멘탈', ageRating: 'ALL' },
  { title: '명탐정 코난', ageRating: '12세' },
];

export const BodyMovie = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [selectedMovies, setSelectedMovies] = useState([]);

  //영화 선택
  const handleMovieClick = (index) => {
    if (!selectedMovies.includes(index) && selectedMovies.length < 3) {
      setSelectedMovies([...selectedMovies, index]);
    } else {
      setSelectedMovies(selectedMovies.filter((item) => item !== index));
    }
  };

  return (
    <Box sx={bcmContainerBox}>
      <Box sx={bcmInnerContainerBox}>
        <Grid container>
          <Grid item xs={12} sm={12} sx={bcmGridItemTypo}>
            <Typography variant='h6'>영화</Typography>
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
            <List>
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
          <Grid item xs={12} sm={12} sx={bcmGridItem}></Grid>
        </Grid>
      </Box>
    </Box>
  );
};
