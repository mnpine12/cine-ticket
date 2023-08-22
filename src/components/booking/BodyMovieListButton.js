import ListItemButton from '@mui/material/ListItemButton';
import { bcmMoviesListItem, bcmMovieListButton } from '../../css/BookingStyles';
import { useEffect, useState } from 'react';

export const BodyMovieListButton = ({
  movie,
  index,
  selectedMovies,
  handleMovieClick,
  ageRating,
}) => {
  const [imgUrl, setImgUrl] = useState('/image/');
  useEffect(() => {
    if (ageRating === 'ALL') {
      setImgUrl('/images/ALL_46x46.png');
    } else {
      setImgUrl(`/images/${ageRating.replace('세', '')}_46x46.png`);
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
      sx={bcmMoviesListItem}
      disableRipple
    >
      <img src={imgUrl} alt={ageRating} style={bcmMovieListButton} />
      {movie}
    </ListItemButton>
  );
};
