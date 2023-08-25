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
import { FooterPlaceImage } from './FooterPlaceImage';

const place = [
  {
    area: '서울',
    cinema: ['강남', '강남대로(씨티)', '강동', '군자'],
  },
  {
    area: '경기',
    cinema: ['고양스타필드', '광명AK플라자', '광명소하', '금정AK플라자'],
  },
];

export const BodyPlace = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [selectedCinema, setSelectedCinema] = useState([]);

  const handleOnClickPlace = (value) => {
    setSelectedPlace(value);
  };

  const handleOnClickCinema = (value) => {
    if (!selectedCinema.includes(value) && selectedCinema.length < 3) {
      setSelectedCinema([...selectedCinema, value]);
    } else {
      setSelectedCinema(selectedCinema.filter((item) => item !== value));
    }
  };

  const handelCinemaDelBtnClick = (value) => {
    setSelectedCinema(selectedCinema.filter((item) => item !== value));
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
                {place.map((value, index) => (
                  <ListItemButton
                    key={index}
                    disableRipple
                    selected={selectedCinema === index}
                    value={index}
                    onClick={() => handleOnClickPlace(index)}
                    sx={bcpPlacesListButton}
                  >
                    {value.area}
                  </ListItemButton>
                ))}
              </List>
              {selectedPlace === null ? null : selectedPlace === 0 ? (
                <List sx={bcpCinemaList}>
                  {place[selectedPlace].cinema.map((cinema, index) => (
                    <ListItemButton
                      key={index}
                      disableRipple
                      selected={selectedCinema.includes(cinema)}
                      onClick={() => handleOnClickCinema(cinema)}
                      sx={bcpPlacesListButton}
                    >
                      {cinema}
                    </ListItemButton>
                  ))}
                </List>
              ) : (
                <List sx={bcpCinemaList}>
                  {place[selectedPlace].cinema.map((cinema, index) => (
                    <ListItemButton
                      key={index}
                      disableRipple
                      selected={selectedCinema.includes(cinema)}
                      onClick={() => handleOnClickCinema(cinema)}
                      sx={bcpPlacesListButton}
                    >
                      {cinema}
                    </ListItemButton>
                  ))}
                </List>
              )}
            </Box>
          </Grid>
          <Grid item xs={12} sm={12}>
            <FooterPlaceImage
              selectedCinema={selectedCinema}
              handelCinemaDelBtnClick={handelCinemaDelBtnClick}
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
