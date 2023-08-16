import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link as RouterLink } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Link from '@mui/material/Link';
import GlobalStyles from '@mui/material/GlobalStyles';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import Box from '@mui/material/Box';
import '../css/styles';

import {
  headerLink,
  headerBox,
  headerMenuList,
  headerMenuItem,
  headerListItemText,
} from '../css/styles';

const defaultTheme = createTheme();

export const Header = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles
        styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }}
      />
      <AppBar position='static' color='inherit' elevation={0}>
        <Toolbar
          sx={{
            flexWrap: 'wrap',
            display: 'flex',
            justifyContent: 'flex-end',
          }}
        >
          <nav>
            <Link
              style={{ fontSize: '13px' }}
              variant='button'
              href='/login'
              color='text.primary'
              sx={headerLink}
            >
              로그인
            </Link>
            <Link
              style={{ fontSize: '13px' }}
              variant='button'
              color='text.primary'
              href='/signup'
              sx={headerLink}
            >
              회원가입
            </Link>
            <Link
              style={{ fontSize: '13px' }}
              variant='button'
              color='text.primary'
              href='#'
              sx={headerLink}
            >
              빠른예매
            </Link>
          </nav>
        </Toolbar>
        <Box sx={headerBox}>
          <MenuList sx={headerMenuList}>
            <MenuItem component={RouterLink} to='/detail' sx={headerMenuItem}>
              <ListItemText primaryTypographyProps={headerListItemText}>
                영화
              </ListItemText>
            </MenuItem>
            <MenuItem sx={headerMenuItem}>
              <ListItemText primaryTypographyProps={headerListItemText}>
                예매
              </ListItemText>
            </MenuItem>
            <MenuItem component={RouterLink} to='/'>
              <img src='images/gigabox.png' alt='메인로고' />
            </MenuItem>
            <MenuItem sx={headerMenuItem}>
              <ListItemText primaryTypographyProps={headerListItemText}>
                이벤트
              </ListItemText>
            </MenuItem>
            <MenuItem sx={headerMenuItem}>
              <ListItemText primaryTypographyProps={headerListItemText}>
                마이페이지
              </ListItemText>
            </MenuItem>
          </MenuList>
        </Box>
      </AppBar>
    </ThemeProvider>
  );
};
