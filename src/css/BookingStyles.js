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

export const bmTopCalendarBox = {
  width: '100%',
  height: '40px',
  margin: 0,
  padding: 0,
  borderTop: '1px solid #555555',
  borderLeft: '1px solid #d8d9db',
  borderRight: '1px solid #d8d9db',
  display: 'flex',
};

export const bmTopCalendarButton = {
  minWidth: '10px',
  height: '39px',
  color: '#898989',
  '&:hover': {
    background: 'none',
  },
};

export const bmListDates = {
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  margin: 0,
  padding: 0,
};

export const bmListDatesItemButton = {
  fontFamily: 'NanumBarunGothic, sans-serif',
  fontSize: '15px',
  padding: '0', // List 안에 꽉차도록 조절
  width: '100%',
  height: '100%',
  boxSizing: 'border-box',
  display: 'flex', // 이 아래로 글자 가운데 정렬
  alignItems: 'center',
  justifyContent: 'center',
};
