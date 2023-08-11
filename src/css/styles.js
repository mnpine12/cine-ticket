/* Header CSS start */

export const headerLink = {
  my: "1rem",
  mx: "1.5rem",
  textDecoration: "none",
  color: "inherit",
  "&:hover": {
    color: "#1976d2",
  },
  "&.active": {
    color: "green",
  },
};

export const headerBox = {
  width: "100%",
  margin: "auto",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  borderBottom: "1px solid #d3d3d3",
};

export const headerMenuList = {
  width: "100%",
  display: "flex",
  flexDirection: "row",
  padding: 0,
  justifyContent: "center",
  alignItems: "center",
};

export const headerMenuItem = {
  width: "160px",
  height: "60px",
  display: "flex",
  textAlign: "center",
  justifyContent: "center",
  alignItems: "center",
};

export const headerListItemText = { variant: "body1", fontWeight: "bold" };

/* Header CSS end */

/* MovieDetail CSS start */

export const mdContOuterBox = {
  width: "100%",
  height: "500px",
  padding: 0,
  margin: 0,
  background: "#151515",
};

export const mdContGridContainer = {
  width: "80%",
  height: "100%",
  margin: "auto",
  position: "relative",
  backgroundImage: 'url("images/poster02.jpg")',
  backgroundSize: "cover",
};

export const mdContGridItemText = {
  width: "100%",
  height: "100%",
  margin: "auto",
  padding: 1,
  zIndex: 2,
};

export const mdContGridContainerOverlay = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  opacity: 0.8,
  background: "#151515",
  zIndex: 1,
};

export const mdContGridItemImage = {
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 2,
};

export const mdContImage = {
  maxHeight: "85%",
};

export const mdDataOuterBox = {
  width: "100%",
  height: "500px",
};

export const mdDataGridContainer = {
  width: "80%",
  background: "#ffffff",
  margin: "auto",
  padding: "1rem",
};

export const mdDataGridItemTitle = {
  marginTop: "1rem",
  marginBottom: "3rem",
};

export const mdDataGridItemText = {
  marginTop: "3rem",
};

export const mdDataGridItemInfo = {
  marginTop: "1rem",
  marginBottom: "2rem",
};

export const mdDataTitleTypo = {
  fontWeight: "Regular",
  fontSize: "32px",
};

export const mdDataContentTypo = {
  fontWeight: "Regular",
  fontSize: "16px",
};

/* MovieDetail CSS end */
