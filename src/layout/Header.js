import React from 'react';
import { memo, useEffect, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Link from '@mui/material/Link';
import GlobalStyles from '@mui/material/GlobalStyles';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import {
  headerLink,
  headerLink_Black,
  headerBox,
  headerMenuList,
  headerMenuItem,
  headerListItemText,
  headerToolbar,
  headerToolbar_Black,
  headerMenuList_Black,
  headerBox_Black,
} from '../css/LayoutStyles';

const defaultTheme = createTheme();

const Header = (props) => {
  const { type } = props;

  const [headerToolbarType, setHeaderToolbarType] =
    useState(headerToolbar_Black);
  const [headerMenuListType, setHeaderMenuListType] =
    useState(headerMenuList_Black);
  const [headerBoxType, setHeaderBoxType] = useState(headerBox_Black);
  const [headerLinkType, setHeaderLinkType] = useState(headerLink_Black);

  useEffect(() => {
    switch (type) {
      case 'none':
        setHeaderToolbarType(headerToolbar);
        setHeaderMenuListType(headerMenuList);
        setHeaderBoxType(headerBox);
        setHeaderLinkType(headerLink);
        break;
      case 'black':
        setHeaderToolbarType(headerToolbar_Black);
        setHeaderMenuListType(headerMenuList_Black);
        setHeaderBoxType(headerBox_Black);
        setHeaderLinkType(headerLink_Black);
        break;
      default:
        console.error('타입에러');
        break;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles
        styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }}
      />
      <AppBar position='static' color='inherit' elevation={0}>
        <Toolbar sx={headerToolbarType}>
          <nav>
            <Link
              style={{ fontSize: '13px' }}
              variant='button'
              href='/login'
              color='text.primary'
              sx={headerLinkType}
            >
              로그인
            </Link>
            <Link
              style={{ fontSize: '13px' }}
              variant='button'
              color='text.primary'
              href='/signup'
              sx={headerLinkType}
            >
              회원가입
            </Link>
            <Link
              style={{ fontSize: '13px' }}
              variant='button'
              color='text.primary'
              href='/booking'
              sx={headerLinkType}
            >
              빠른예매
            </Link>
          </nav>
        </Toolbar>
        <Box sx={headerBoxType}>
          <MenuList sx={headerMenuListType}>
            <MenuItem
              disableRipple
              component={RouterLink}
              to='/movie/boxOffice'
              sx={headerMenuItem}
            >
              <ListItemText primaryTypographyProps={headerListItemText}>
                영화
              </ListItemText>
            </MenuItem>
            <MenuItem
              disableRipple
              component={RouterLink}
              to='/booking'
              sx={headerMenuItem}
            >
              <ListItemText primaryTypographyProps={headerListItemText}>
                예매
              </ListItemText>
            </MenuItem>
            <MenuItem
              disableRipple
              component={RouterLink}
              to='/'
              sx={headerMenuItem}
            >
              {type === 'none' ? (
                <img src='/images/logo/gigabox.png' alt='기가박스' />
              ) : (
                <img src='/images/logo/gigabox_main.png' alt='기가박스' />
              )}
            </MenuItem>
            <MenuItem disableRipple sx={headerMenuItem}>
              <ListItemText primaryTypographyProps={headerListItemText}>
                이벤트
              </ListItemText>
            </MenuItem>
            <MenuItem
              disableRipple
              component={RouterLink}
              to='/myPage'
              sx={headerMenuItem}
            >
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

export default memo(Header);
