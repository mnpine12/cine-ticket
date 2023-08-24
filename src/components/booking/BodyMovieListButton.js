import { useEffect, useState } from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import {
  bcmMoviesListButton,
  bcmMovieListButtonImg,
} from '../../css/BookingStyles';

export const BodyMovieListButton = ({
  movie,
  index,
  selectedMovies,
  handleMovieClick,
  ageRating,
}) => {
  const [imgUrl, setImgUrl] = useState('/images/icon/ALL_46x46.png');
  useEffect(() => {
    if (ageRating === 'ALL') {
      setImgUrl('/images/icon/ALL_46x46.png');
    } else {
      setImgUrl(`/images/icon/${ageRating.replace('세', '')}_46x46.png`);
    }
  }, [ageRating]);

  const handleOnClick = () => {
    handleMovieClick(index);
  };

  return (
    <ListItemButton
      key={index}
      selected={selectedMovies.includes(index)}
      value={index}
      onClick={handleOnClick}
      sx={bcmMoviesListButton}
      disableRipple
    >
      <img src={imgUrl} alt={ageRating} style={bcmMovieListButtonImg} />
      {movie}
    </ListItemButton>
  );
};
