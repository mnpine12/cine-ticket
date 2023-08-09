import { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs from "dayjs";
import "dayjs/locale/ko";

import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
// ######################## import 구분 ########################

const defaultTheme = createTheme();
const gridStyle = {
  mb: 1,
};

export const Signup = () => {
  const [birth, setBirth] = useState(dayjs().locale("ko"));
  const [gender, setGender] = useState(null);
  // ###################### 함수 구분 ##########################
  const handleChangeGender = (event, newGender) => {
    setGender(newGender);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      id: data.get("id"),
      password: data.get("password"),
    });
  };
  // ###################### 함수 구분 ##########################
  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "#1976d2" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            회원가입
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 5 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sx={gridStyle}>
                <TextField
                  required
                  fullWidth
                  id="id"
                  label="아이디"
                  name="id"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sx={gridStyle}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="비밀번호"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12} sm={6} sx={gridStyle}>
                <TextField
                  autoComplete="name"
                  name="name"
                  required
                  fullWidth
                  id="name"
                  label="이름"
                />
              </Grid>
              <Grid item xs={12} sm={6} sx={gridStyle}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    label="생년월일"
                    openTo="year"
                    views={["year", "month", "day"]}
                    format="YYYY-MM-DD"
                    value={birth}
                    onChange={(value) => setBirth(value)}
                  />
                </LocalizationProvider>
              </Grid>
              <Grid item xs={12} sm={12} sx={gridStyle}>
                <ToggleButtonGroup
                  color="primary"
                  value={gender}
                  exclusive
                  onChange={handleChangeGender}
                  fullWidth
                >
                  <ToggleButton value="male">남자</ToggleButton>
                  <ToggleButton value="female">여자</ToggleButton>
                  <ToggleButton value="none">선택안함</ToggleButton>
                </ToggleButtonGroup>
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 2, mb: 2 }}
            >
              가입하기
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/login" variant="body2">
                  아이디를 가지고 계십니까? 로그인하기
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};
