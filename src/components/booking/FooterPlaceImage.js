import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';

import {
  bcpCinemaDelBtn,
  bcpGridItemCinemaDelBtn,
  bcpGridItemImage,
  bcpGridItemImageBox_none,
  bcpGridItemImgTypo,
  bcpImage,
} from '../../css/BookingStyles';

export const FooterPlaceImage = ({
  selectedCinema,
  handelCinemaDelBtnClick,
}) => {
  const delButton = '/images/icon/btn-choice-dell-circle.png';

  const handleOnClickDelBtn = (value) => {
    handelCinemaDelBtnClick(value);
  };

  return (
    <Box
      sx={{
        ...bcpGridItemImageBox_none,
        border: selectedCinema.length !== 0 ? 'none' : '1px solid #d8d9db',
      }}
    >
      {selectedCinema.length === 0 ? (
        <Typography sx={bcpGridItemImgTypo}>
          전체극장
          <br /> 목록에서 극장을 선택하세요.
        </Typography>
      ) : (
        <Grid container sx={bcpGridItemImage}>
          {selectedCinema.length === 1 ? (
            <>
              <Grid item xs={12} sm={4}>
                <Box sx={bcpGridItemCinemaDelBtn}>
                  <div style={bcpImage}>
                    <Typography sx={bcpGridItemImgTypo}>
                      {selectedCinema[0]}
                    </Typography>
                  </div>
                  <IconButton
                    onClick={() => handleOnClickDelBtn(selectedCinema[0])}
                    sx={bcpCinemaDelBtn}
                  >
                    <img src={delButton} alt='del-button' />
                  </IconButton>
                </Box>
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
          ) : selectedCinema.length === 2 ? (
            <>
              <Grid item xs={12} sm={4}>
                <Box sx={bcpGridItemCinemaDelBtn}>
                  <div style={bcpImage}>
                    <Typography sx={bcpGridItemImgTypo}>
                      {selectedCinema[0]}
                    </Typography>
                  </div>
                  <IconButton
                    onClick={() => handleOnClickDelBtn(selectedCinema[0])}
                    sx={bcpCinemaDelBtn}
                  >
                    <img src={delButton} alt='del-button' />
                  </IconButton>
                </Box>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Box sx={bcpGridItemCinemaDelBtn}>
                  <div style={bcpImage}>
                    <Typography sx={bcpGridItemImgTypo}>
                      {selectedCinema[1]}
                    </Typography>
                  </div>
                  <IconButton
                    onClick={() => handleOnClickDelBtn(selectedCinema[1])}
                    sx={bcpCinemaDelBtn}
                  >
                    <img src={delButton} alt='del-button' />
                  </IconButton>
                </Box>
              </Grid>
              <Grid item xs={12} sm={4}>
                <img
                  src='/images/poster/poster_none.png'
                  alt='선택되지 않음'
                  style={bcpImage}
                />
              </Grid>
            </>
          ) : (
            <>
              <Grid item xs={12} sm={4}>
                <Box sx={bcpGridItemCinemaDelBtn}>
                  <div style={bcpImage}>
                    <Typography sx={bcpGridItemImgTypo}>
                      {selectedCinema[0]}
                    </Typography>
                  </div>
                  <IconButton
                    onClick={() => handleOnClickDelBtn(selectedCinema[0])}
                    sx={bcpCinemaDelBtn}
                  >
                    <img src={delButton} alt='del-button' />
                  </IconButton>
                </Box>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Box sx={bcpGridItemCinemaDelBtn}>
                  <div style={bcpImage}>
                    <Typography sx={bcpGridItemImgTypo}>
                      {selectedCinema[1]}
                    </Typography>
                  </div>
                  <IconButton
                    onClick={() => handleOnClickDelBtn(selectedCinema[1])}
                    sx={bcpCinemaDelBtn}
                  >
                    <img src={delButton} alt='del-button' />
                  </IconButton>
                </Box>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Box sx={bcpGridItemCinemaDelBtn}>
                  <div style={bcpImage}>
                    <Typography sx={bcpGridItemImgTypo}>
                      {selectedCinema[2]}
                    </Typography>
                  </div>
                  <IconButton
                    onClick={() => handleOnClickDelBtn(selectedCinema[2])}
                    sx={bcpCinemaDelBtn}
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
