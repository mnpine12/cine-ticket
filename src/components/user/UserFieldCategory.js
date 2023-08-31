import React from 'react';

import Grid from '@mui/material/Grid';

import { uiGridContainer, uiGridItemContents1 } from '../../css/UserStyles';

export const UserFieldCategory = () => {
  return (
    <Grid container xs={3} sx={uiGridContainer}>
      <Grid item xs={12} sx={uiGridItemContents1}>
        아이디
      </Grid>
      <Grid item xs={12} sx={uiGridItemContents1}>
        비밀번호
      </Grid>
      <Grid
        item
        xs={12}
        sx={{ ...uiGridItemContents1, borderBottom: '3px solid #d8d9db' }}
      >
        비밀번호확인
      </Grid>
      <Grid item xs={12} sx={uiGridItemContents1}>
        이름
      </Grid>
      <Grid item xs={12} sx={uiGridItemContents1}>
        성별
      </Grid>
      <Grid
        item
        xs={12}
        sx={{ ...uiGridItemContents1, borderBottom: '3px solid #d8d9db' }}
      >
        생년월일
      </Grid>
      <Grid item xs={12} sx={uiGridItemContents1}>
        연락처
      </Grid>
      <Grid item xs={12} sx={uiGridItemContents1}>
        이메일
      </Grid>
    </Grid>
  );
};
