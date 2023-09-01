import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

import movie from '../../movie.json';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import {
  mcButton,
  mcGridContainer,
  mcGridItemBoxTypo,
  mcGridItemImage,
  mcGridItemImageBox,
  mcGridItemImageOverlay,
  mcGridItemInnerBox,
  mcGridItemLogoImage,
  mcGridItemMovie,
  mcGridItemSearch,
  mcImageText,
  mcOuterBox,
  mcTitleTypo,
  mcTypo,
} from '../../css/MovieStyles';
import { poster } from '../ImgPath';

export const MovieChart = () => {
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
      <Box sx={mcOuterBox}>
        <Grid container sx={mcGridContainer}>
          <Grid item xs={12} sm={12} sx={mcGridItemSearch}></Grid>
          {Array.from({ length: 4 }, (_, index) => (
            <Grid item xs={12} sm={3} sx={mcGridItemMovie} key={index}>
              <Box
                sx={mcGridItemImageBox}
                onMouseEnter={() => handleOnMouseEnter(index)}
                onMouseLeave={() => handleOnMouseLeave(index)}
              >
                {isHovered[index]?.hovered === true ? (
                  <Link to={`/detail/${movie[index].id}`}>
                    <img
                      src={poster[`poster${index}`]}
                      alt={movie[index].title}
                      style={mcGridItemImageOverlay}
                      onClick={() => handleMovieOnClick(movie[index].id)}
                    />
                    <Typography
                      sx={mcImageText}
                      onClick={() => handleMovieOnClick(movie[index].id)}
                    >
                      {movie[index].summaryTitle}
                      <br />
                      <br />
                      {movie[index].summaryContents}
                    </Typography>
                  </Link>
                ) : (
                  <img
                    src={poster[`poster${index}`]}
                    alt={movie[index].title}
                    style={mcGridItemImage}
                  />
                )}
              </Box>
              <Box sx={mcGridItemInnerBox}>
                <img
                  src={`/images/icon/${movie[index].ageRating.replace(
                    '세',
                    '',
                  )}_46x46.png`}
                  alt={movie[index].ageRating}
                  style={mcGridItemLogoImage}
                />
                <Typography sx={mcTitleTypo}>{movie[index].title}</Typography>
              </Box>
              <Box sx={mcGridItemBoxTypo}>
                <Typography sx={mcTypo}>
                  예매율 {movie[index].reservationRate}%
                </Typography>
                &nbsp;
                <Typography sx={{ ...mcTypo, color: '#C0C0C0' }}>|</Typography>
                &nbsp;
                <Typography sx={mcTypo}>
                  개봉일 {movie[index].releaseDate.replace(/-/g, '.')}
                </Typography>
              </Box>
              <Button
                variant='contained'
                disableElevation={true}
                disableRipple
                sx={mcButton}
                onClick={() => handleBookingOnClick(index)}
              >
                예매
              </Button>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};
