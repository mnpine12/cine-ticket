/******************************************/
/* Header CSS start */
/******************************************/

export const headerToolbar = {
  display: 'flex',
  justifyContent: 'flex-end',
};

export const headerToolbar_Black = {
  flexWrap: 'wrap',
  display: 'flex',
  justifyContent: 'flex-end',
  color: '#ffffff',
  background: '#150e0d',
};

export const headerLink = {
  padding: '0.5rem',
  textDecoration: 'none',
  color: 'inherit',
  '&:hover': {
    color: '#7B3EB0',
    borderBottom: '1px solid #7B3EB0',
  },
};

export const headerLink_Black = {
  padding: '0.5rem',
  textDecoration: 'none',
  color: 'inherit',
  '&:hover': {
    color: '#ffff00',
    borderBottom: '1px solid #ffff00',
  },
};

export const headerBox = {
  width: '100%',
  margin: 'auto',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  borderBottom: '1px solid rgb(192, 192, 192)',
};

export const headerBox_Black = {
  width: '100%',
  margin: 'auto',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  background: 'rgba(0,0,0,.8)',
  borderBottom: '1px solid rgba(192, 192, 192, .2)',
};

export const headerMenuList = {
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  padding: '1rem',
  justifyContent: 'center',
  alignItems: 'center',
};

export const headerMenuList_Black = {
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  padding: '1rem',
  justifyContent: 'center',
  alignItems: 'center',
  color: '#ffffff',
  background: '#150e0d',
};

export const headerMenuItem = {
  width: '160px',
  height: '60px',
  display: 'flex',
  textAlign: 'center',
  justifyContent: 'center',
  alignItems: 'center',
  '&:hover': {
    background: 'transparent',
  },
};

export const headerListItemText = {
  fontFamily: 'NanumBarunGothic, sans-serif',
  fontSize: '18px',
  fontWeight: 'bold',
};

export const headerListItemText2 = {
  fontFamily: 'NanumBarunGothic, sans-serif',
  fontSize: '18px',
  fontWeight: 'bold',
  color: '#ffffff',
};

/******************************************/
/* Header CSS end */
/******************************************/
/* Main CSS start */
/******************************************/

export const mbOuterBox = {
  width: '100%',
  height: '100%',
  background: '#150e0d',
  paddingTop: '4rem',
  paddingBottom: '3rem',
};

export const mbGridContainerText = {
  width: '100%',
  height: '50px',
  margin: 'auto',
  textAlign: 'center',
  background: '#150e0d',
};

export const mbGridItemText = {
  margin: 'auto',
  color: '#ffffff',
  fontWeight: 'bold',
  textShadow: '1px 1px 0 #151515',
};

export const mbGridContainerImage = {
  width: '80%',
  height: '100%',
  margin: 'auto',
};

export const mbGridItemImage = {
  width: '100%',
  height: '400px',
  marginTop: '1rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
};

export const mbBoxImage = {
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
};

export const mbImage = {
  width: '240px',
  height: '351px',
  borderRadius: '3%',
};

export const mbImageText = {
  position: 'absolute',
  color: '#ffffff',
};

export const mbContGridItemImageOverlay = {
  width: '240px',
  height: '351px',
  borderRadius: '3%',
  opacity: 0.2,
  background: '#151515',
  zIndex: 1,
};

export const mbGridItemButton = {
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

export const mbButton = {
  width: '240px',
  marginTop: '10px',
  background: '#037b94',
  '&:hover': {
    background: '#329eb1',
  },
};

export const mbGridContainerSearch = {
  width: '80%',
  height: '100%',
  margin: 'auto',
  paddingTop: '4rem',
  paddingRight: '1rem',
};

export const mbGridItemSearch = {
  width: '100%',
  height: '100px',
  margin: 'auto',
  padding: '2rem',
  color: '#ffffff',
};

export const mbLinkItemBox = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '18px',
};

/******************************************/
/* Main CSS end */
/******************************************/
/* MovieDetail CSS start */
/******************************************/

export const mdContOuterBox = {
  width: '100%',
  height: '500px',
  padding: 0,
  margin: 0,
  background: '#151515',
};

export const mdContGridContainer = {
  width: '80%',
  height: '100%',
  margin: 'auto',
  position: 'relative',
  backgroundImage: 'url("images/poster02.jpg")',
  backgroundSize: 'cover',
};

export const mdContGridItemText = {
  width: '100%',
  height: '100%',
  margin: 'auto',
  padding: 1,
  zIndex: 2,
};

export const mdContGridContainerOverlay = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  opacity: 0.8,
  background: '#151515',
  zIndex: 1,
};

export const mdContGridItemImage = {
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 2,
};

export const mdContImage = {
  maxHeight: '85%',
  borderRadius: '3%',
};

export const mdDataOuterBox = {
  width: '100%',
  height: '500px',
};

export const mdDataGridContainer = {
  width: '80%',
  background: '#ffffff',
  margin: 'auto',
  padding: '1rem',
};

export const mdDataGridItemTitle = {
  marginTop: '1rem',
  marginBottom: '3rem',
};

export const mdDataGridItemText = {
  marginTop: '3rem',
};

export const mdDataGridItemInfo = {
  marginTop: '1rem',
  marginBottom: '2rem',
};

export const mdDataTitleTypo = {
  fontWeight: 'Regular',
  fontSize: '32px',
};

export const mdDataContentTypo = {
  fontWeight: 'Regular',
  fontSize: '16px',
};

export const mdButton = {
  width: '72%',
  height: '10%',
  mt: 1,
  background: '#037b94',
  '&:hover': {
    background: '#329eb1',
  },
};

/******************************************/
/* MovieDetail CSS end */
/******************************************/
/* MovieList CSS start */
/******************************************/

export const mlOuterBox = {
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
};

export const mlBreadcrumbsBox = {
  width: '100%',
  height: '40px',
  background: '#f8f8fa',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
};

export const mlBreadcrumbs = {
  paddingLeft: '10rem',
};

export const mlGridContainerText = {
  width: '80%',
  height: '100px',
  margin: 'auto',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
};

export const mlGridItemText = {
  width: '100%',
  height: '100%',
};

export const mlGridItemTypo = {
  paddingTop: '2rem',
  fontFamily: 'NanumBarunGothic, sans-serif',
  fontSize: '30px',
};

export const mlGridContainerTabs = {
  width: '80%',
  height: '100%',
  margin: 'auto',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
};

export const mlGridItemTabs = {
  width: '100%',
};

export const mlMenuItem = {
  width: '300px',
  height: '50px',
  textAlign: 'center',
  justifyContent: 'center',
  alignItems: 'center',
  border: '1px solid rgba(0,0,0,0.2)',
  borderBottom: '1px solid rgb(91, 64, 160)',
  '&:hover': {
    background: '#ffffff',
  },
  '&.Mui-selected': {
    color: '#5B40A0',
    background: '#ffffff',
    border: '1px solid rgb(91, 64, 160)',
    borderBottom: '1px solid #ffffff',
    fontWeight: 'bold',
  },
};

export const mlMenuItemDisable = {
  width: '320px',
  height: '50px',
  borderBottom: '1px solid rgb(91, 64, 160)',
  pointerEvents: 'none',
};

export const mlContentsBox = {
  width: '80%',
  height: '100%',
  margin: 'auto',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
};

/******************************************/
/* MovieList CSS end */
/******************************************/
/* MovieChart CSS start */
/******************************************/

export const mcOuterBox = {
  width: '100%',
  height: '100%',
  marginTop: '2rem',
};

export const mcGridContainer = {
  width: '100%',
  height: '100%',
};

export const mcGridItemSearch = {
  width: '100%',
  height: '100%',
};

export const mcGridItemMovie = {
  width: '100%',
  height: '450px',
  marginTop: '1rem',
  marginBottom: '4rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
};

export const mcGridItemImageBox = {
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  background: '#151515',
};

export const mcGridItemImage = {
  width: '230px',
  height: '331px',
};

export const mcImageText = {
  position: 'absolute',
  paddingLeft: '5px',
  paddingRight: '5px',
  color: '#ffffff',
};

export const mcGridItemImageOverlay = {
  width: '230px',
  height: '331px',
  opacity: 0.2,
  zIndex: 1,
};

export const mcGridItemInnerBox = {
  width: '230px',
  marginTop: '15px',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
};

export const mcGridItemLogoImage = {
  width: '23px',
  height: '23px',
  marginRight: '10px',
};

export const mcTitleTypo = {
  fontSize: '20px',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
  flex: '1',
};

export const mcGridItemBoxTypo = {
  width: '230px',
  marginTop: '5px',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
};

export const mcTypo = {
  fontSize: '14.5px',
  fontFamily: 'NanumBarunGothic, sans-serif',
};

export const mcButton = {
  width: '230px',
  height: '36px',
  marginTop: '5px',
  background: '#503396',
  borderRadius: '4px',
  border: 0,
  '&:hover': {
    background: '#351f67',
  },
};

/******************************************/
/* MovieChart CSS end */
/******************************************/
/* MovieComingSoon CSS start */
/******************************************/

export const mcsOuterBox = {
  width: '100%',
  height: '100%',
  marginTop: '2rem',
};

export const mcsGridContainer = {
  width: '100%',
  height: '100%',
};

export const mcsGridItemSearch = {
  width: '100%',
  height: '100%',
};

export const mcsGridItemMovie = {
  width: '100%',
  height: '450px',
  marginTop: '1rem',
  marginBottom: '4rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
};

export const mcsGridItemImageBox = {
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  background: '#151515',
};

export const mcsGridItemImage = {
  width: '230px',
  height: '331px',
};

export const mcsImageText = {
  position: 'absolute',
  paddingLeft: '5px',
  paddingRight: '5px',
  color: '#ffffff',
};

export const mcsGridItemImageOverlay = {
  width: '230px',
  height: '331px',
  opacity: 0.2,
  zIndex: 1,
};

export const mcsGridItemInnerBox = {
  width: '230px',
  marginTop: '15px',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
};

export const mcsGridItemLogoImage = {
  width: '23px',
  height: '23px',
  marginRight: '10px',
};

export const mcsTitleTypo = {
  fontSize: '20px',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
  flex: '1',
};

export const mcsGridItemBoxTypo = {
  width: '230px',
  marginTop: '5px',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
};

export const mcsTypo = {
  fontSize: '14.5px',
  fontFamily: 'NanumBarunGothic, sans-serif',
};

export const mcsButton = {
  width: '230px',
  height: '36px',
  marginTop: '5px',
  background: '#503396',
  borderRadius: '4px',
  border: 0,
  '&:hover': {
    background: '#351f67',
  },
};
