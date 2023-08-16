import { useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs from 'dayjs';
import 'dayjs/locale/ko';

import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// ######################## import 구분 ########################
const defaultTheme = createTheme();
const gridStyle = {
  mb: 1,
};

export const Signup = () => {
  const [birth, setBirth] = useState(dayjs().locale('ko'));
  const [gender, setGender] = useState('none');
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const [idError, setIdError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);

  // ###################### 함수 구분 ##########################

  // 연락처 입력
  const handlePhoneChange = (event) => {
    const inputValue = event.target.value;
    const formattedValue = formatPhoneNumber(inputValue);
    if (formattedValue.length <= 13) {
      setPhone(formattedValue);
    }
  };

  // 연락처 입력값 포맷
  const formatPhoneNumber = (value) => {
    value = value.replace(/\D/g, '');
    let formattedValue = '';

    if (value.length > 3) {
      formattedValue += value.substr(0, 3) + '-';
      if (value.length > 7) {
        formattedValue += value.substr(3, 4) + '-';
        formattedValue += value.substr(7, 4);
      } else {
        formattedValue += value.substr(3);
      }
    } else {
      formattedValue = value;
    }
    return formattedValue;
  };

  const handleFieldFocus = (fieldName) => {
    switch (fieldName) {
      case 'id':
        setIdError(false);
        break;
      case 'password':
        setPasswordError(false);
        break;
      case 'name':
        setNameError(false);
        break;
      case 'phone':
        setPhoneError(false);
        break;
      default:
        break;
    }
  };

  const handleFieldBlur = (fieldName) => {
    switch (fieldName) {
      case 'id':
        if (id.trim() === '') {
          setIdError(true);
        }
        break;
      case 'password':
        if (password.trim() === '') {
          setPasswordError(true);
        }
        break;
      case 'name':
        if (name.trim() === '') {
          setNameError(true);
        }
        break;
      case 'phone':
        if (phone.trim() === '') {
          setPhoneError(true);
        }
        break;
      default:
        break;
    }
  };

  // 성별 저장
  const handleChangeGender = (event, newGender) => {
    setGender(newGender);
  };

  // 가입하기 제출
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      id: data.get('id'),
      password: data.get('password'),
    });
  };
  // ###################### 함수 구분 ##########################
  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component='main' maxWidth='xs'>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, background: '#1976d2' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component='h1' variant='h5'>
            회원가입
          </Typography>
          <Box
            component='form'
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 5 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sx={gridStyle}>
                <TextField
                  required
                  fullWidth
                  id='id'
                  label='아이디'
                  name='id'
                  autoFocus
                  error={idError}
                  onChange={(e) => setId(e.target.value)}
                  onFocus={() => handleFieldFocus('id')}
                  onBlur={() => handleFieldBlur('id')}
                />
              </Grid>
              <Grid item xs={12} sx={gridStyle}>
                <TextField
                  required
                  fullWidth
                  name='password'
                  label='비밀번호'
                  type='password'
                  id='password'
                  error={passwordError}
                  onChange={(e) => setPassword(e.target.value)}
                  onFocus={() => handleFieldFocus('password')}
                  onBlur={() => handleFieldBlur('password')}
                />
              </Grid>
              <Grid item xs={12} sm={6} sx={gridStyle}>
                <TextField
                  autoComplete='name'
                  name='name'
                  required
                  fullWidth
                  id='name'
                  label='이름'
                  error={nameError}
                  onChange={(e) => setName(e.target.value)}
                  onFocus={() => handleFieldFocus('name')}
                  onBlur={() => handleFieldBlur('name')}
                />
              </Grid>
              <Grid item xs={12} sm={6} sx={gridStyle}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    label='생년월일'
                    openTo='year'
                    views={['year', 'month', 'day']}
                    format='YYYY-MM-DD'
                    value={birth}
                    onChange={(value) => setBirth(value)}
                  />
                </LocalizationProvider>
              </Grid>
              <Grid item xs={12} sm={12} sx={gridStyle}>
                <ToggleButtonGroup
                  color='primary'
                  value={gender}
                  exclusive
                  onChange={handleChangeGender}
                  fullWidth
                >
                  <ToggleButton value='male'>남자</ToggleButton>
                  <ToggleButton value='female'>여자</ToggleButton>
                  <ToggleButton value='none'>선택안함</ToggleButton>
                </ToggleButtonGroup>
              </Grid>
              <Grid item xs={12} sm={12} sx={gridStyle}>
                <TextField
                  required
                  fullWidth
                  name='phone'
                  id='phone'
                  type='tel'
                  label='연락처'
                  error={phoneError}
                  onFocus={() => handleFieldFocus('phone')}
                  onBlur={() => handleFieldBlur('phone')}
                  value={phone}
                  onChange={handlePhoneChange}
                  inputProps={{
                    maxLength: 13,
                  }}
                />
              </Grid>
            </Grid>
            <Button
              type='submit'
              fullWidth
              variant='contained'
              sx={{ mt: 2, mb: 2 }}
            >
              가입하기
            </Button>
            <Grid container justifyContent='flex-end'>
              <Grid item>
                <Link href='/login' variant='body2'>
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
