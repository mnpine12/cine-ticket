import { Outlet, Link as RouterLink } from 'react-router-dom';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import { Header } from '../../layout/Header';
import {
  mlContentsBox,
  mlGridContainerTabs,
  mlGridContainerText,
  mlGridItemTabs,
  mlGridItemText,
  mlGridItemTypo,
  mlMenuItem,
  mlOuterBox,
} from '../../css/styles';
import { MenuItem, MenuList } from '@mui/material';
import { useState } from 'react';

export const MovieList = () => {
  const [boxOfficeSelected, setBoxOfficeSelected] = useState(false);
  const [comingSoonSelected, setComingSoonSelected] = useState(false);

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
      <Header type={'none'} />
      <Box sx={mlOuterBox}>
        <Grid container sx={mlGridContainerText}>
          <Grid item xs={12} sm={12} sx={mlGridItemText}>
            <Typography sx={mlGridItemTypo}>전체영화</Typography>
          </Grid>
        </Grid>
        <Grid container sx={mlGridContainerTabs}>
          <Grid item xs={12} sm={12} sx={mlGridItemTabs}>
            <MenuList sx={{ display: 'flex', flexDirection: 'row' }}>
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
