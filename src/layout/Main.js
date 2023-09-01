import { useNavigate } from 'react-router-dom';
import { useEffect, useMemo, useState } from 'react';

import Header from './Header';
import movie from '../movie.json';

import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';

import {
  mbBoxImage,
  mbButton,
  mbGridContainerImage,
  mbGridContainerSearch,
  mbGridContainerText,
  mbGridItemButton,
  mbGridItemImage,
  mbGridItemSearch,
  mbGridItemText,
  mbImage,
  mbImageText,
  mbLinkItemBox,
  mbOuterBox,
  mbContGridItemImageOverlay,
} from '../css/LayoutStyles';
import { poster } from '../components/ImgPath';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
  borderBottom: 'solid, 1px, #ffffff',
  color: '#ffff',
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
  },
}));

export const Main = () => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState([]);
  const cachedHeader = useMemo(() => <Header type={'black'} />, []);

  useEffect(() => {
    const initialHoverState = movie.map(() => ({ hovered: false }));
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

  const handleOnClick = (movieId) => {
    if (movieId !== '') {
      navigate(`/booking/${movieId}`);
    } else {
      navigate(`/booking`);
    }
  };

  const handleMovieOnClick = (movieId) => {
    navigate(`/detail/${movieId}`);
  };

  return (
    <>
      {cachedHeader}
      <Box sx={mbOuterBox}>
        <Grid container sx={mbGridContainerText}>
          <Grid item xs={12} sm={12} sx={mbGridItemText}>
            박스오피스
          </Grid>
        </Grid>
        <Grid container sx={mbGridContainerImage}>
          {Array.from({ length: 4 }, (_, index) => (
            <Grid item xs={12} sm={3} sx={mbGridItemImage} key={index}>
              <Box
                sx={mbBoxImage}
                onMouseEnter={() => handleOnMouseEnter(index)}
                onMouseLeave={() => handleOnMouseLeave(index)}
              >
                {isHovered[index]?.hovered === true ? (
                  <Link to={`/detail/${movie[index].id}`}>
                    <img
                      src={poster[`poster${index}`]}
                      alt={movie[index].title}
                      style={mbContGridItemImageOverlay}
                      onClick={() => handleMovieOnClick(movie[index].id)}
                    />
                    <Typography
                      sx={mbImageText}
                      onClick={() => handleMovieOnClick(movie[index].id)}
                    >
                      {movie[index].summaryTitle}
                      <br />
                      <br />
                      {movie[index].summaryContents}
                    </Typography>
                  </Link>
                ) : (
                  <Link to={`/detail/${movie[index].id}`}>
                    <img
                      src={poster[`poster${index}`]}
                      alt={movie[index].title}
                      style={mbImage}
                      onClick={() => handleMovieOnClick(movie[index].id)}
                    />
                  </Link>
                )}
              </Box>
              <Box sx={mbGridItemButton}>
                <Button
                  variant='contained'
                  disableElevation={true}
                  disableRipple
                  sx={mbButton}
                  onClick={() => handleOnClick(movie[index].id)}
                >
                  예매
                </Button>
              </Box>
            </Grid>
          ))}
        </Grid>
        <Grid container sx={mbGridContainerSearch}>
          <Grid item xs={12} sm={3} sx={mbGridItemSearch}>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder='영화명을 입력해 주세요'
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search>
          </Grid>
          <Grid item xs={12} sm={3} sx={mbGridItemSearch}>
            <Box sx={mbLinkItemBox}>
              <img src='/images/icon/icon1.png' alt='icon1' />
              &nbsp;&nbsp;
              <Link href='#' color={'#ffffff'}>
                상영시간표
              </Link>
            </Box>
          </Grid>
          <Grid item xs={12} sm={3} sx={mbGridItemSearch}>
            <Box sx={mbLinkItemBox}>
              <img src='/images/icon/icon2.png' alt='icon2' />
              &nbsp;&nbsp;
              <Link href='/movie/boxOffice' color={'#ffffff'}>
                박스오피스
              </Link>
            </Box>
          </Grid>
          <Grid item xs={12} sm={3} sx={mbGridItemSearch}>
            <Box sx={mbLinkItemBox}>
              <img src='/images/icon/icon3.png' alt='icon3' />
              &nbsp;&nbsp;
              <Link href='/booking' color={'#ffffff'}>
                빠른예매
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
