import React, { useMemo } from 'react';
import Header from '../../layout/Header';

import { UserFieldCategory } from './UserFieldCategory';
import { UserFieldValue } from './UserFieldValue';

import Box from '@mui/material/Box';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import HomeIcon from '@mui/icons-material/Home';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

import {
  uiBreadcrumbs,
  uiBreadcrumbsBox,
  uiBreadcrumbsLink,
  uiInnerBox,
  uiOuterBox,
  uiTitleBox,
} from '../../css/UserStyles';

const user = {
  account: 'user123',
  password: '123456',
  userName: '김유저',
  gender: '없음',
  birth: '1990-01-01',
  phone: '010-1234-5678',
  email: 'user123@naver.com',
};

export const UserInfo = () => {
  const cachedHeader = useMemo(() => <Header type={'none'} />, []);

  return (
    <>
      {cachedHeader}
      <Box sx={uiOuterBox}>
        <Box sx={uiBreadcrumbsBox}>
          <Breadcrumbs
            aria-label='breadcrumb'
            separator={<NavigateNextIcon fontSize='small' />}
            sx={uiBreadcrumbs}
          >
            <Link color='inherit' href='/' sx={uiBreadcrumbsLink}>
              <HomeIcon fontSize='inherit' />
            </Link>
            <Link
              color='inherit'
              underline='none'
              href='/booking'
              sx={uiBreadcrumbsLink}
            >
              마이페이지
            </Link>
            <Link color='inherit' underline='none' sx={uiBreadcrumbsLink}>
              회원정보
            </Link>
          </Breadcrumbs>
        </Box>
        <Box sx={uiInnerBox}>
          <Box sx={uiTitleBox}>
            <Typography variant='h5' sx={{ fontWeight: 'bold' }}>
              회원 정보
            </Typography>
          </Box>
          <Box sx={{ display: 'flex' }}>
            <UserFieldCategory />
            <UserFieldValue user={user} />
          </Box>
        </Box>
      </Box>
    </>
  );
};
