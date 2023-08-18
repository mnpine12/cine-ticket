import { useMemo, useState } from 'react';
import { Outlet, Link as RouterLink } from 'react-router-dom';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import HomeIcon from '@mui/icons-material/Home';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

import Header from '../../layout/Header';

import {
  mlBreadcrumbsBox,
  mlContentsBox,
  mlGridContainerTabs,
  mlGridContainerText,
  mlGridItemTabs,
  mlGridItemText,
  mlGridItemTypo,
  mlMenuItem,
  mlMenuItemDisable,
  mlOuterBox,
} from '../../css/styles';

export const MovieList = () => {
  const [boxOfficeSelected, setBoxOfficeSelected] = useState(true);
  const [comingSoonSelected, setComingSoonSelected] = useState(false);

  const cachedHeader = useMemo(() => <Header type={'none'} />, []);

  const handleOnClickTab = (tabName) => {
    if (tabName === 'boxOffice') {
      setBoxOfficeSelected(true);
      setComingSoonSelected(false);
    } else if (tabName === 'comingSoon') {
      setBoxOfficeSelected(false);
      setComingSoonSelected(true);
    }
  };

  return (
    <>
      {cachedHeader}
      <Box sx={mlOuterBox}>
        <Box sx={mlBreadcrumbsBox}>
          <Breadcrumbs
            aria-label='breadcrumb'
            separator={<NavigateNextIcon fontSize='small' />}
          >
            <Link
              color='inherit'
              href='/'
              sx={{ display: 'flex', alignItems: 'center' }}
            >
              <HomeIcon fontSize='inherit' />
            </Link>
            <Link
              color='inherit'
              underline='none'
              href='/movie'
              sx={{ display: 'flex', alignItems: 'center' }}
            >
              영화
            </Link>
            <Link
              color='inherit'
              underline='none'
              sx={{ display: 'flex', alignItems: 'center' }}
            >
              전체영화
            </Link>
          </Breadcrumbs>
        </Box>
        <Grid container sx={mlGridContainerText}>
          <Grid item xs={12} sm={12} sx={mlGridItemText}>
            <Typography sx={mlGridItemTypo}>전체영화</Typography>
          </Grid>
        </Grid>
        <Grid container sx={mlGridContainerTabs}>
          <Grid item xs={12} sm={12} sx={mlGridItemTabs}>
            <MenuList
              sx={{
                display: 'flex',
                flexDirection: 'row',
              }}
            >
              <MenuItem
                disableRipple={true}
                selected={boxOfficeSelected}
                component={RouterLink}
                to='boxOffice'
                sx={mlMenuItem}
                onClick={() => handleOnClickTab('boxOffice')}
              >
                박스오피스
              </MenuItem>
              <MenuItem
                disableRipple={true}
                selected={comingSoonSelected}
                component={RouterLink}
                to='comingSoon'
                sx={mlMenuItem}
                onClick={() => handleOnClickTab('comingSoon')}
              >
                상영예정작
              </MenuItem>
              <MenuItem sx={mlMenuItemDisable}></MenuItem>
              <MenuItem sx={mlMenuItemDisable}></MenuItem>
            </MenuList>
          </Grid>
        </Grid>
        <Box sx={mlContentsBox}>
          <Outlet />
        </Box>
      </Box>
    </>
  );
};
