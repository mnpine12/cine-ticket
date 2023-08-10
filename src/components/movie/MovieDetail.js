import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { InputLabel, Typography } from "@mui/material";

const outerBoxStyle = {
  width: "100%",
  height: "500px",
  padding: 0,
  margin: 0,
  background: "#151515",
};

const gridContainerStyle = {
  width: "80%",
  height: "100%",
  margin: "auto",
  position: "relative",
  backgroundImage: 'url("images/poster02.jpg")',
  backgroundSize: "cover",
};

const gridTextItemStyle = {
  width: "100%",
  height: "100%",
  margin: "auto",
  padding: 1,
  zIndex: 2,
};

const gridContainerOverlay = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  opacity: 0.8,
  background: "#151515",
  zIndex: 1,
};

const gridImageItemStyle = {
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 2,
};

const imageStyle = {
  maxHeight: "85%",
};

export const MovieDetail = () => {
  const movieTitle = "메가로돈 2";
  const movieEngTitle = "Meg 2: The Trench";
  const reservationRate = 1;
  const cumulative = 1000;

  return (
    <Box sx={outerBoxStyle}>
      <Grid container sx={gridContainerStyle}>
        <div style={gridContainerOverlay} />
        <Grid item xs={12} sm={8} sx={gridTextItemStyle}>
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
        <Grid item xs={12} sm={4} sx={gridImageItemStyle}>
          <img
            style={imageStyle}
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
  );
};
