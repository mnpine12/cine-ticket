/******************************************/
/* BookingMain CSS start */
/******************************************/

export const bmBreadcrumbsBox = {
  width: '100%',
  height: '40px',
  background: '#f8f8fa',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
};

export const bmBreadcrumbs = {
  paddingLeft: '10rem',
};

export const bmLink = { display: 'flex', alignItems: 'center' };

export const bmOuterBox = {
  width: '1100px',
  height: '760px',
  margin: 'auto',
};

export const bmTitleTypoBox = {
  width: '100%',
  height: '50px',
  paddingTop: '30px',
  paddingBottom: '20px',
};

export const bmTitleTypo = {
  fontFamily: 'NanumBarunGothic, sans-serif',
  fontSize: '28px',
};

/******************************************/
/* BookingMain CSS end */
/******************************************/
/* HeaderCalendar CSS start */
/******************************************/

export const hcTopCalendarBox = {
  width: '100%',
  height: '40px',
  margin: 0,
  padding: 0,
  borderTop: '1px solid #555555',
  borderLeft: '1px solid #d8d9db',
  borderRight: '1px solid #d8d9db',
  display: 'flex',
};

export const hcTopCalendarButton = {
  minWidth: '10px',
  height: '39px',
  color: '#898989',
  '&:hover': {
    background: 'none',
  },
};

export const hcListDates = {
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  margin: 0,
  padding: 0,
};

export const hcListDatesItemButton = {
  fontFamily: 'NanumBarunGothic, sans-serif',
  fontSize: '15px',
  padding: '0', // List 안에 꽉차도록 조절
  width: '100%',
  height: '100%',
  boxSizing: 'border-box',
  display: 'flex', // 이 아래로 글자 가운데 정렬
  alignItems: 'center',
  justifyContent: 'center',
  '&:hover': {
    borderBottom: '2px solid #503396',
  },
  '&.Mui-selected': {
    background: '#f5f5f5',
    borderBottom: '2px solid #503396',
    '&:hover': {
      background: '#f5f5f5',
    },
  },
};

/******************************************/
/* HeaderCalendar CSS end */
/******************************************/
/* BodyContents CSS start */
/******************************************/

export const bcContainerBox = {
  width: '100%',
  height: '545px',
  display: 'flex',
};

/******************************************/
/* BodyContents CSS end */
/******************************************/
/* BodyMovie CSS start */
/******************************************/

export const bcmContainerBox = {
  width: '270px',
  height: '100%',
  border: '1px solid #d8d9db',
  borderRight: 'none',
  padding: '0px 20px 0px 20px',
};

export const bcmInnerContainerBox = {
  width: '100%',
  height: '100%',
  background: 'white',
};

export const bcmGridItemTypo = {
  width: '100%',
  height: '38px',
  fontSize: '18px',
  display: 'flex',
  alignItems: 'center',
};

export const bcmGridItemList = {
  width: '100%',
  height: '38px',
  margin: 0,
  padding: 0,
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
};

export const bcmListItemButton = {
  height: '30px',
  fontSize: '14px',
  padding: 0,
  boxSizing: 'border-box',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderTop: '1px solid #d8d9db',
  borderLeft: '1px solid #d8d9db',
  borderRight: '1px solid #d8d9db',
  borderBottom: '1px solid #151515',
  '&:hover': {
    background: 'none',
  },
  '&.Mui-selected': {
    background: 'none',
    border: '1px solid #151515',
    borderBottom: 'none',
    '&:hover': {
      background: 'none',
    },
  },
  fontFamily: 'NanumBarunGothic, sans-serif',
};

export const bcmGridItem = {
  marginTop: '10px',
};

export const bcmGridListItemImage = {
  maxHeight: '320px',
  overflow: 'auto',
};

export const bcmGridItemImageBox_none = {
  height: '90px',
  marginTop: '5px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  border: '1px solid #d8d9db',
};

export const bcmGridItemImgTypo = {
  fontSize: '14px',
  fontFamily: 'NanumBarunGothic, sans-serif',
};

export const bcmGridItemImageBox = {
  width: '100%',
  height: '90px',
  marginTop: 'top',
  display: 'flex',
  alignItems: 'center',
  textAlign: 'center',
};

export const bcmImage = {
  width: '63px',
  height: '100%',
  border: '1px solid #d8d9db',
  margin: 'auto',
};

/******************************************/
/* BodyMovie CSS end */
/******************************************/
/* BodyMovieListButton CSS start */
/******************************************/

export const bcmMoviesListButton = {
  height: '28px',
  padding: '3px 3px 3px 3px',
  boxSizing: 'border-box',
  display: 'flex',
  alignItems: 'center',
  fontSize: '14px',
  '&:hover': {
    background: 'inherit',
  },
  '&.Mui-selected': {
    background: '#666666',
    color: '#ffffff',
    '&:hover': {
      background: '#666666',
    },
  },
  fontFamily: 'NanumBarunGothic, sans-serif',
};

export const bcmMovieListButtonImg = {
  width: '20px',
  height: '20px',
  marginRight: '5px',
};

/******************************************/
/* BodyMovieListButton CSS end */
/******************************************/
/* BodyPlace CSS start */
/******************************************/

export const bcpContainerBox = {
  width: '350px',
  height: '100%',
  border: '1px solid #d8d9db',
};

/******************************************/
/* BodyPlace CSS end */
/******************************************/
/* BodyTime CSS start */
/******************************************/

export const bctContainerBox = {
  width: '480px',
  height: '100%',
  border: '1px solid #d8d9db',
  borderLeft: 'none',
};

/******************************************/
/* BodyTime CSS end */
/******************************************/
