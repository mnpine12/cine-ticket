/******************************************/
/* SeatBooking CSS start */
/******************************************/

export const sbOuterBox = {
  width: '100%',
  margin: 'auto',
};

export const sbBreadcrumbsBox = {
  width: '100%',
  height: '40px',
  background: '#f8f8fa',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
};

export const sbBreadcrumbs = {
  paddingLeft: '10rem',
};

export const sbBreadcrumbsLink = {
  display: 'flex',
  alignItems: 'center',
};

export const sbBodyBox = {
  width: '100%',
  height: '750px',
};

export const sbTitleTypoBox = {
  width: '1100px',
  height: '50px',
  paddingTop: '30px',
  paddingBottom: '20px',
  margin: 'auto',
};

export const sbTitleTypo = {
  fontSize: '28px',
  fontFamily: 'NanumBarunGothic, sans-serif',
  marginLeft: '35px',
};

export const sbContentsBox = {
  width: '100%',
  height: '560px',
  margin: 'auto',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

/******************************************/
/* SeatBooking CSS end */
/******************************************/
/* SeatSelector CSS start */
/******************************************/

export const ssOuterBox = {
  width: '700px',
  height: '100%',
  marginBottom: 0,
  paddingTop: '5px',
  borderTop: '1px solid #151515',
};

export const ssTopGridContainer = {
  width: '100%',
  marginTop: '5px',
  marginBottom: '5px',
  alignItems: 'center',
};

export const ssTopTitleTypo = {
  fontFamily: 'NanumBarunGothic, sans-serif',
  fontSize: '18px',
};

export const ssTopButton = {
  fontWeight: 'bold',
  background: '#ffffff',
  color: '#666666',
  border: '1px solid #d8d9db',
  '&:hover': {
    background: '#f2f4f8',
    border: '1px solid #151515',
  },
};

export const ssGridItemCount = {
  height: '55px',
  marginTop: '10px',
  paddingTop: '10px',
  paddingLeft: '20px',
  paddingBottom: '10px',
  display: 'flex',
  alignItems: 'center',
  background: '#f2f4f5',
  border: '1px solid #d8d9db',
};

export const ssCountButton = {
  width: '25px',
  height: '25px',
  background: '#ffffff',
  color: '#666666',
  border: '1px solid #d8d9db',
  '&:hover': {
    background: 'transparent',
  },
};

export const ssCountTextField = {
  width: '50px',
  marginRight: '5px',
  marginLeft: '5px',
  textAlign: 'center',
  background: '#ffffff',
};

export const ssGridItemCountBox = {
  display: 'flex',
  alignItems: 'center',
};

/******************************************/
/* SeatSelector CSS end */
/******************************************/
/* SeatDisplay CSS start */
/******************************************/

export const sdOuterBox = {
  width: '100%',
  height: '450px',
  textAlign: 'center',
  border: '1px solid #151515',
};

export const sdToggleBtnGroupBox = {
  textAlign: 'left',
  display: 'flex',
  justifyContent: 'center',
};

export const sdLetterToggleButton = {
  width: '25px',
  height: '25px',
  marginRight: '2rem',
  '&:hover': {
    background: 'transparent',
  },
  borderRadius: '0px',
};

export const sdNumberToggleButton = {
  width: '25px',
  height: '25px',
  margin: '1px',
  border: '1px solid #02bfd3',
  borderRadius: '0px',
  background: '#747474',
  color: '#ffffff',
  '&:hover': {
    background: '#503396',
  },
  '&.Mui-selected': {
    background: '#503396',
    color: '#ffffff',
    '&:hover': {
      background: '#503396',
    },
  },
};

export const sdNumberToggleButton_dis = {
  width: '25px',
  height: '25px',
  margin: '1px',
  border: '1px solid #02bfd3',
  borderRadius: '0px',
  color: '#ffffff',
  opacity: 0.6,
  backgroundImage: 'url("/images/icon/bg-seat-condition-impossible.png")',
  backgroundSize: 'cover',
};

export const sdNumberToggleGroupLeft = {
  marginLeft: '1rem',
  marginRight: '1rem',
};

export const sdNumberToggleGroupRight = {
  marginLeft: '1rem',
  marginRight: '3rem',
};

/******************************************/
/* SeatDisplay CSS end */
/******************************************/
/* SeatSelectorInfo CSS start */
/******************************************/

export const ssiOuterBox = {
  width: '310px',
  height: '100%',
  marginLeft: '1rem',
  borderRadius: '10px',
  background: '#333333',
};

export const ssiInnerBox = {
  padding: '1rem',
};

export const ssiTopBox = {
  height: '80px',
};

export const ssiTopBoxIcon = {
  window: '20px',
  height: '20px',
};

export const ssiImg = {
  width: '70px',
  height: '100px',
};

export const ssiFooterBtn_L = {
  height: '40px',
  borderRadius: '0px',
  background: '#53565b',
  color: '#ffffff',
  '&:hover': {
    background: '#53565b',
  },
  fontSize: '17px',
};

export const ssiFooterBtn_R = {
  height: '40px',
  borderRadius: '0px',
  background: '#e0e0e0',
  color: '#aaaaaa',
  '&:hover': {
    background: '#e0e0e0',
  },
  fontSize: '17px',
};

export const ssiBodyGridItem_image = {
  border: '1px solid rgba(255, 255, 255, 0.1)',
  padding: '2rem',
};

export const ssiBodyGridItemBox = {
  display: 'flex',
  justifyContent: 'left',
  marginTop: '5px',
};

export const ssiBodyGridItem_seat = {
  padding: '1rem',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  textAlign: 'center',
};

export const ssiBodyGridItem_seatBox = {
  width: '35px',
  height: '35px',
  marginBottom: '5px',
  color: '#ffffff',
  background: '#503396',
  border: '1px solid rgba(255, 255, 255, 0.2)',
  textAlign: 'center',
};

export const ssiBodyGridItem_seatBox_none = {
  width: '35px',
  height: '35px',
  marginBottom: '5px',
  color: 'rgba(255, 255, 255, 0.4)',
  background: 'inherit',
  border: '1px solid rgba(255, 255, 255, 0.4)',
  textAlign: 'center',
};

export const ssiBodyGridItem_selected = {
  marginTop: '5px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

export const ssiFooterGridItem = {
  height: '90px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'flex-end',
};

export const ssiFontStyle = {
  color: '#ffffff',
  opacity: 0.8,
  fontSize: '13px',
};

export const ssiFontStyle2 = {
  color: '#ffffff',
  fontSize: '15px',
};

export const ssiFontStyle3 = {
  color: '#ffffff',
  fontSize: '24px',
};
