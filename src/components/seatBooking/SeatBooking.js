import React, { useMemo } from 'react';

import Box from '@mui/material/Box';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import HomeIcon from '@mui/icons-material/Home';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

import { SeatSelector } from './SeatSelector';
import { SeatSelectorInfo } from './SeatSelectorInfo';

import Header from '../../layout/Header';
import {
  sbBreadcrumbs,
  sbBreadcrumbsBox,
  sbBreadcrumbsLink,
  sbContentsBox,
  sbOuterBox,
  sbTitleTypo,
  sbTitleTypoBox,
} from '../../css/SeatBookingStyles';

export const SeatBooking = () => {
  const cachedHeader = useMemo(() => <Header type={'none'} />, []);
  return (
    <>
      {cachedHeader}
      <Box sx={sbOuterBox}>
        <Box sx={sbBreadcrumbsBox}>
          <Breadcrumbs
            aria-label='breadcrumb'
            separator={<NavigateNextIcon fontSize='small' />}
            sx={sbBreadcrumbs}
          >
            <Link color='inherit' href='/' sx={sbBreadcrumbsLink}>
              <HomeIcon fontSize='inherit' />
            </Link>
            <Link
              color='inherit'
              underline='none'
              href='/booking'
              sx={sbBreadcrumbsLink}
            >
              예매
            </Link>
            <Link color='inherit' underline='none' sx={sbBreadcrumbsLink}>
              빠른예매
            </Link>
          </Breadcrumbs>
        </Box>
        <Box sx={sbTitleTypoBox}>
          <Typography sx={sbTitleTypo}>빠른예매</Typography>
        </Box>
        <Box sx={sbContentsBox}>
          <SeatSelector />
          <SeatSelectorInfo />
        </Box>
      </Box>
    </>
  );
};
