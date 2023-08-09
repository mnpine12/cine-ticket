import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import GlobalStyles from "@mui/material/GlobalStyles";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import Box from "@mui/material/Box";

const defaultTheme = createTheme();
const linkStyle = {
  my: 1,
  mx: 1.5,
  textDecoration: "none",
  color: "inherit",
  "&:hover": {
    color: "#1976d2",
  },
  "&.active": {
    color: "green",
  },
};

const containerStyle = {
  width: "100vw",
  margin: "auto",
  bgcolor: "#80cbc4",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
};

const menuListStyle = {
  width: "100%",
  display: "flex",
  flexDirection: "row",
  padding: 0,
  justifyContent: "center",
  alignItems: "center",
};

const menuItemStyle = {
  width: "160px",
  height: "60px",
  display: "flex",
  textAlign: "center",
  justifyContent: "center",
  alignItems: "center",
};

export const Header = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles
        styles={{ ul: { margin: 0, padding: 0, listStyle: "none" } }}
      />
      <AppBar position="static" color="inherit" elevation={0}>
        <Toolbar
          sx={{ flexWrap: "wrap", display: "flex", alignItems: "flex-end" }}
        >
          <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
            영화 예매 사이트
          </Typography>
          <nav>
            <Link
              variant="button"
              color="text.primary"
              href="/login"
              sx={linkStyle}
            >
              로그인
            </Link>
            <Link
              variant="button"
              color="text.primary"
              href="/signup"
              sx={linkStyle}
            >
              회원가입
            </Link>
            <Link variant="button" color="text.primary" href="#" sx={linkStyle}>
              빠른예매
            </Link>
          </nav>
        </Toolbar>
        <Box sx={containerStyle}>
          <MenuList sx={menuListStyle}>
            <MenuItem sx={menuItemStyle}>
              <ListItemText>영화</ListItemText>
            </MenuItem>
            <MenuItem sx={menuItemStyle}>
              <ListItemText>예매</ListItemText>
            </MenuItem>
            <MenuItem sx={menuItemStyle}>
              <ListItemText>홈화면</ListItemText>
            </MenuItem>
            <MenuItem sx={menuItemStyle}>
              <ListItemText>마이페이지</ListItemText>
            </MenuItem>
          </MenuList>
        </Box>
      </AppBar>
    </ThemeProvider>
  );
};
