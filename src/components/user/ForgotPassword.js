import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';

import {
  fpContainerBox,
  fpContentsTypoBox,
  fpInputBox,
  fpInputTextField,
  fpTitleTypoBox,
} from '../../css/UserStyles';

const defaultTheme = createTheme();

export const ForgotPassword = () => {
  const handleSubmit = () => {};
  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component='main' maxWidth='sm' sx={{ mt: 10 }}>
        <Box sx={fpContainerBox}>
          <Box sx={fpTitleTypoBox}>
            <Typography sx={{ color: 'white' }}>비밀번호를 재설정</Typography>
          </Box>
          <Box sx={fpContentsTypoBox}>
            <Typography sx={{ fontWeight: 'Regular' }}>
              비밀번호를 재설정할 아이디를 입력해주세요.
            </Typography>
          </Box>
          <Box component='form' onSubmit={handleSubmit} sx={fpInputBox}>
            <TextField
              required
              fullWidth
              name='id'
              label='아이디'
              type='text'
              id='id'
              size='small'
              autoFocus
              sx={fpInputTextField}
            />
            <Button variant='contained' type='submit'>
              조회
            </Button>
          </Box>
        </Box>
        <Grid container justifyContent='flex-end'>
          <Grid item>
            <Link href='/login' variant='body2'>
              비밀번호 변경 취소하기
            </Link>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
};
