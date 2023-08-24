import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';

import {
  bcpCinemaList,
  bcpCinemaListButton,
  bcpContainerBox,
  bcpGridItemImage,
  bcpGridItemImageBox_none,
  bcpGridItemImgTypo,
  bcpGridItemList,
  bcpGridItemTypo,
  bcpImage,
  bcpInnerContainerBox,
  bcpListItemButton,
  bcpPlacesList,
  bcpPlacesListBox,
  bcpPlacesListButton,
} from '../../css/BookingStyles';

export const BodyPlace = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [selectedCinema, setSelectedCinema] = useState(null);

  const handleOnClickPlace = (value) => {
    setSelectedPlace(value);
    setSelectedCinema(null);
  };

  const handleOnClickCinema = (value) => {
    setSelectedCinema(value);
  };

  return (
    <Box sx={bcpContainerBox}>
      <Box sx={bcpInnerContainerBox}>
        <Grid container>
          <Grid item xs={12} sm={12} sx={bcpGridItemTypo}>
            <Typography variant='text'>극장</Typography>
          </Grid>
          <Grid item xs={12} sm={12}>
            <List sx={bcpGridItemList}>
              <ListItemButton
                selected={selectedMenu === 0}
                value={selectedMenu}
                onClick={() => setSelectedMenu(0)}
                sx={bcpListItemButton}
                disableRipple
              >
                전체
              </ListItemButton>
              <ListItemButton
                selected={selectedMenu === 1}
                value={selectedMenu}
                onClick={() => setSelectedMenu(1)}
                sx={bcpListItemButton}
                disableRipple
              >
                특별관
              </ListItemButton>
            </List>
          </Grid>
          <Grid item xs={12} sm={12} sx={{ display: 'flex' }}>
            <Box sx={bcpPlacesListBox}>
              <List sx={bcpPlacesList}>
                <ListItemButton
                  disableRipple
                  selected={selectedPlace === 0}
                  value={selectedPlace}
                  onClick={() => handleOnClickPlace(0)}
                  sx={bcpPlacesListButton}
                >
                  서울
                </ListItemButton>
                <ListItemButton
                  disableRipple
                  selected={selectedPlace === 1}
                  value={selectedPlace}
                  onClick={() => handleOnClickPlace(1)}
                  sx={bcpPlacesListButton}
                >
                  경기
                </ListItemButton>
              </List>
              {selectedPlace === null ? null : selectedPlace === 0 ? (
                <List sx={bcpCinemaList}>
                  <ListItemButton
                    disableRipple
                    selected={selectedCinema === 0}
                    value={selectedCinema}
                    onClick={() => handleOnClickCinema(0)}
                    sx={bcpCinemaListButton}
                  >
                    강남
                  </ListItemButton>
                </List>
              ) : (
                <List sx={bcpCinemaList}>
                  <ListItemButton
                    disableRipple
                    selected={selectedCinema === 0}
                    value={selectedCinema}
                    onClick={() => handleOnClickCinema(0)}
                    sx={bcpCinemaListButton}
                  >
                    고양스타필드
                  </ListItemButton>
                </List>
              )}
            </Box>
          </Grid>
          <Grid item xs={12} sm={12}>
            <Box
              sx={{
                ...bcpGridItemImageBox_none,
                border: selectedCinema !== null ? 'none' : '1px solid #d8d9db',
              }}
            >
              {selectedCinema === null ? (
                <Typography sx={bcpGridItemImgTypo}>
                  전체극장
                  <br /> 목록에서 극장을 선택하세요.
                </Typography>
              ) : (
                <Grid container sx={bcpGridItemImage}>
                  {selectedCinema === 0 ? (
                    <>
                      <Grid item xs={12} sm={4}>
                        <div style={bcpImage}>
                          <Typography sx={bcpGridItemImgTypo}>강남</Typography>
                        </div>
                      </Grid>
                      <Grid item xs={12} sm={4}>
                        <img
                          src='/images/poster/poster_none.png'
                          alt='선택되지 않음'
                          style={bcpImage}
                        />
                      </Grid>
                      <Grid item xs={12} sm={4}>
                        <img
                          src='/images/poster/poster_none.png'
                          alt='선택되지 않음'
                          style={bcpImage}
                        />
                      </Grid>
                    </>
                  ) : null}
                </Grid>
              )}
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
