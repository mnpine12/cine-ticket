import React from 'react';

import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';

import { uiGridContainer, uiGridItemContents2 } from '../../css/UserStyles';

export const UserFieldValue = ({ user }) => {
  return (
    <Grid container xs={9} sx={uiGridContainer}>
      <Grid item xs={12} sx={uiGridItemContents2}>
        {user.account}
      </Grid>
      <Grid item xs={12} sx={uiGridItemContents2}>
        <TextField size='small' />
      </Grid>
      <Grid
        item
        xs={12}
        sx={{ ...uiGridItemContents2, borderBottom: '3px solid #d8d9db' }}
      >
        <TextField size='small' />
      </Grid>
      <Grid item xs={12} sx={uiGridItemContents2}>
        {user.userName}
      </Grid>
      <Grid item xs={12} sx={uiGridItemContents2}>
        {user.gender}
      </Grid>
      <Grid
        item
        xs={12}
        sx={{ ...uiGridItemContents2, borderBottom: '3px solid #d8d9db' }}
      >
        {user.birth}
      </Grid>
      <Grid item xs={12} sx={uiGridItemContents2}>
        {user.phone}
      </Grid>
      <Grid item xs={12} sx={uiGridItemContents2}>
        {user.email}
      </Grid>
    </Grid>
  );
};
