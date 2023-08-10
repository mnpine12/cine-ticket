import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { InputLabel, Typography } from "@mui/material";
import { Header } from "../../layout/Header";
import {
  mdContOuterBox,
  mdContGridContainer,
  mdContGridItemText,
  mdContGridContainerOverlay,
  mdContGridItemImage,
  mdContImage,
  mdDataOuterBox,
} from "../../css/styles";

export const MovieDetail = () => {
  const movieTitle = "메가로돈 2";
  const movieEngTitle = "Meg 2: The Trench";
  const reservationRate = 1;
  const cumulative = 1000;

  return (
    <>
      <Header />
      <Box sx={mdContOuterBox}>
        <Grid container sx={mdContGridContainer}>
          <div style={mdContGridContainerOverlay} />
          <Grid item xs={12} sm={8} sx={mdContGridItemText}>
            <Box sx={{ mt: 8, ml: 2 }}>
              <Typography variant="h3" sx={{ color: "white" }}>
                {movieTitle}
              </Typography>
              <Typography variant="h5" sx={{ color: "white" }}>
                {movieEngTitle}
              </Typography>
            </Box>
            <Box sx={{ mt: 32, ml: 2 }}>
              <Grid container sx={{ color: "white" }}>
                <Grid item xs={12} sm={1.5}>
                  <InputLabel sx={{ color: "white" }}>예매율</InputLabel>
                </Grid>
                <Grid item xs={12} sm={10.5} sx={{ color: "white" }}>
                  <InputLabel sx={{ color: "white" }}>누적관객수</InputLabel>
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={1.5}
                  sx={{ display: "flex", alignItems: "flex-end" }}
                >
                  <Typography variant="h4">{reservationRate}</Typography>
                  <Typography variant="h6">위</Typography>
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={10.5}
                  sx={{ display: "flex", alignItems: "flex-end" }}
                >
                  <Typography variant="h4">{cumulative}</Typography>
                  <Typography variant="h6">명</Typography>
                </Grid>
              </Grid>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4} sx={mdContGridItemImage}>
            <img
              style={mdContImage}
              src="images/poster01.jpg"
              alt="메가로돈 2 영화 포스터"
            />
            <Button
              variant="contained"
              sx={{ mt: 1, width: "75%", height: "10%" }}
            >
              예매
            </Button>
          </Grid>
        </Grid>
      </Box>
      <Box sx={mdDataOuterBox}></Box>
    </>
  );
};
