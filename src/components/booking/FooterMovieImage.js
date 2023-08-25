import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';

import {
  bcmGridItemImage,
  bcmGridItemImageBox_none,
  bcmGridItemImageDelBtn,
  bcmGridItemImgTypo,
  bcmImage,
  bcmImageDelBtn,
} from '../../css/BookingStyles';

export const FooterMovieImage = ({
  selectedMovies,
  imgUrl,
  handelMovieDelBtnClick,
}) => {
  const delButton = '/images/icon/btn-choice-dell.png';

  const handleOnClickDelBtn = (index) => {
    handelMovieDelBtnClick(index);
  };

  return (
    <Box
      sx={{
        ...bcmGridItemImageBox_none,
        border: selectedMovies.length !== 0 ? 'none' : '1px solid #d8d9db',
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
                <Box sx={bcmGridItemImageDelBtn}>
                  <img
                    src={imgUrl[0]}
                    alt={selectedMovies[0]}
                    style={bcmImage}
                  />
                  <IconButton
                    onClick={() => handleOnClickDelBtn(selectedMovies[0])}
                    sx={bcmImageDelBtn}
                  >
                    <img src={delButton} alt='del-button' />
                  </IconButton>
                </Box>
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
                <Box sx={bcmGridItemImageDelBtn}>
                  <img
                    src={imgUrl[0]}
                    alt={selectedMovies[0]}
                    style={bcmImage}
                  />
                  <IconButton
                    onClick={() => handleOnClickDelBtn(selectedMovies[0])}
                    sx={bcmImageDelBtn}
                  >
                    <img src={delButton} alt='del-button' />
                  </IconButton>
                </Box>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Box sx={bcmGridItemImageDelBtn}>
                  <img
                    src={imgUrl[1]}
                    alt={selectedMovies[1]}
                    style={bcmImage}
                  />
                  <IconButton
                    onClick={() => handleOnClickDelBtn(selectedMovies[1])}
                    sx={bcmImageDelBtn}
                  >
                    <img src={delButton} alt='del-button' />
                  </IconButton>
                </Box>
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
                <Box sx={bcmGridItemImageDelBtn}>
                  <img
                    src={imgUrl[0]}
                    alt={selectedMovies[0]}
                    style={bcmImage}
                  />
                  <IconButton
                    onClick={() => handleOnClickDelBtn(selectedMovies[0])}
                    sx={bcmImageDelBtn}
                  >
                    <img src={delButton} alt='del-button' />
                  </IconButton>
                </Box>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Box sx={bcmGridItemImageDelBtn}>
                  <img
                    src={imgUrl[1]}
                    alt={selectedMovies[1]}
                    style={bcmImage}
                  />
                  <IconButton
                    onClick={() => handleOnClickDelBtn(selectedMovies[1])}
                    sx={bcmImageDelBtn}
                  >
                    <img src={delButton} alt='del-button' />
                  </IconButton>
                </Box>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Box sx={bcmGridItemImageDelBtn}>
                  <img
                    src={imgUrl[2]}
                    alt={selectedMovies[2]}
                    style={bcmImage}
                  />
                  <IconButton
                    onClick={() => handleOnClickDelBtn(selectedMovies[2])}
                    sx={bcmImageDelBtn}
                  >
                    <img src={delButton} alt='del-button' />
                  </IconButton>
                </Box>
              </Grid>
            </>
          )}
        </Grid>
      )}
    </Box>
  );
};
