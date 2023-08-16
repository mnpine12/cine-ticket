import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import { Grid } from '@mui/material';

const defaultTheme = createTheme();

export const ForgotPassword = () => {
  const handleSubmit = () => {};
  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component='main' maxWidth='sm' sx={{ mt: 10 }}>
        <Box sx={{ pb: 9, boxShadow: 1, mb: 1 }}>
          <Box
            sx={{
              mb: 2,
              p: 2,
              textAlign: 'left',
              background: '#1565c0',
            }}
          >
            <Typography sx={{ color: 'white' }}>비밀번호를 재설정</Typography>
          </Box>
          <Box
            sx={{
              mt: 7,
              mb: 2.5,
              textAlign: 'center',
            }}
          >
            <Typography sx={{ fontWeight: 'Regular' }}>
              비밀번호를 재설정할 아이디를 입력해주세요.
            </Typography>
          </Box>
          <Box
            component='form'
            onSubmit={handleSubmit}
            sx={{
              mt: 1,
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <TextField
              required
              fullWidth
              name='id'
              label='아이디'
              type='text'
              id='id'
              size='small'
              autoFocus
              sx={{ width: 250, ml: 2, mr: 2 }}
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
