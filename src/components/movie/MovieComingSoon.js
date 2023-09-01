import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

import movie from '../../movie.json';

import {
  mcsButton,
  mcsGridContainer,
  mcsGridItemBoxTypo,
  mcsGridItemImage,
  mcsGridItemImageBox,
  mcsGridItemImageOverlay,
  mcsGridItemInnerBox,
  mcsGridItemLogoImage,
  mcsGridItemMovie,
  mcsGridItemSearch,
  mcsImageText,
  mcsOuterBox,
  mcsTitleTypo,
  mcsTypo,
} from '../../css/MovieStyles';
import { Link, useNavigate } from 'react-router-dom';
import { poster } from '../ImgPath';

export const MovieComingSoon = () => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState([]);

  useEffect(() => {
    const initialHoverState = Array.from({ length: 4 }, (_, index) => ({
      hovered: false,
    }));
    setIsHovered(initialHoverState);
  }, []);

  const handleOnMouseEnter = (index) => {
    setIsHovered((prevIsHovered) => {
      const updatedHovered = [...prevIsHovered];
      updatedHovered[index] = { hovered: true };
      return updatedHovered;
    });
  };

  const handleOnMouseLeave = (index) => {
    setIsHovered((prevIsHovered) => {
      const updatedHovered = [...prevIsHovered];
      updatedHovered[index] = { hovered: false };
      return updatedHovered;
    });
  };

  const handleMovieOnClick = (movieId) => {
    navigate(`/detail/${movieId}`);
  };

  const handleBookingOnClick = (movieId) => {
    navigate(`/booking/${movieId}`);
  };

  return (
    <>
      <Box sx={mcsOuterBox}>
        <Grid container sx={mcsGridContainer}>
          <Grid item xs={12} sm={12} sx={mcsGridItemSearch}></Grid>
          {Array.from({ length: 4 }, (_, index) => {
            const idx = 14 - index;
            return (
              <Grid item xs={12} sm={3} sx={mcsGridItemMovie} key={index}>
                <Box
                  sx={mcsGridItemImageBox}
                  onMouseEnter={() => handleOnMouseEnter(idx)}
                  onMouseLeave={() => handleOnMouseLeave(idx)}
                >
                  {isHovered[idx]?.hovered === true ? (
                    <Link to={`/detail/${movie[idx].id}`}>
                      <img
                        src={poster[`poster${idx}`]}
                        alt={movie[idx].title}
                        style={mcsGridItemImageOverlay}
                        onClick={() => handleMovieOnClick(movie[idx].id)}
                      />
                      <Typography
                        sx={mcsImageText}
                        onClick={() => handleMovieOnClick(movie[idx].id)}
                      >
                        {movie[idx].summaryTitle}
                        <br />
                        <br />
                        {movie[idx].summaryContents}
                      </Typography>
                    </Link>
                  ) : (
                    <img
                      src={poster[`poster${idx}`]}
                      alt={movie[idx].title}
                      style={mcsGridItemImage}
                    />
                  )}
                </Box>
                <Box sx={mcsGridItemInnerBox}>
                  <img
                    src={`/images/icon/${movie[idx].ageRating.replace(
                      '세',
                      '',
                    )}_46x46.png`}
                    alt={movie[idx].ageRating}
                    style={mcsGridItemLogoImage}
                  />
                  <Typography sx={mcsTitleTypo}>{movie[idx].title}</Typography>
                </Box>
                <Box sx={mcsGridItemBoxTypo}>
                  <Typography sx={mcsTypo}>
                    예매율 {movie[idx].reservationRate}%
                  </Typography>
                  &nbsp;
                  <Typography sx={{ ...mcsTypo, color: '#C0C0C0' }}>
                    |
                  </Typography>
                  &nbsp;
                  <Typography sx={mcsTypo}>
                    개봉일 {movie[idx].releaseDate.replace(/-/g, '.')}
                  </Typography>
                </Box>
                <Button
                  variant='contained'
                  disableElevation={true}
                  disableRipple
                  sx={mcsButton}
                  onClick={() => handleBookingOnClick(idx)}
                >
                  예매
                </Button>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </>
  );
};
