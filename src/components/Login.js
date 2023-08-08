import { createTheme, ThemeProvider } from "@mui/material/styles";

const defaultTheme = createTheme();

export const Login = () => {
  return <ThemeProvider theme={defaultTheme}></ThemeProvider>;
};
