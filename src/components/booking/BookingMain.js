import { useMemo } from 'react';
import { useParams } from 'react-router-dom';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import HomeIcon from '@mui/icons-material/Home';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

import Header from '../../layout/Header';
import { HeaderCalendar } from './HeaderCalendar';
import { BodyContents } from './BodyContents';

import {
  bmBreadcrumbs,
  bmBreadcrumbsBox,
  bmLink,
  bmOuterBox,
  bmTitleTypo,
  bmTitleTypoBox,
} from '../../css/BookingStyles';

export const BookingMain = () => {
  const { movieId } = useParams();
  const cachedHeader = useMemo(() => <Header type={'none'} />, []);

  return (
    <>
      {cachedHeader}
      <Box sx={bmBreadcrumbsBox}>
        <Breadcrumbs
          aria-label='breadcrumb'
          separator={<NavigateNextIcon fontSize='small' />}
          sx={bmBreadcrumbs}
        >
          <Link color='inherit' href='/' sx={bmLink}>
            <HomeIcon fontSize='inherit' />
          </Link>
          <Link color='inherit' underline='none' href='/booking' sx={bmLink}>
            예매
          </Link>
          <Link color='inherit' underline='none' sx={bmLink}>
            빠른예매
          </Link>
        </Breadcrumbs>
      </Box>
      <Box sx={bmOuterBox}>
        <Box sx={bmTitleTypoBox}>
          <Typography sx={bmTitleTypo}>빠른예매</Typography>
        </Box>
        <HeaderCalendar />
        <BodyContents movieId={movieId} />
      </Box>
    </>
  );
};
