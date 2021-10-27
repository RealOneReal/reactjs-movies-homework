import { createTheme } from "@mui/material/styles";

let theme = createTheme({
  palette: {
    primary: {
      main: "#84ffff",
      light: "#baffff",
      dark: "#4bcbcc",
    },
    secondary: {
      main: "#455a64",
      light: "#718792",
      dark: "#1c313a",
    },
  },
  components: {
    MuiAvatar: {
      styleOverrides: {
        root: {
          backgroundColor: "green",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: { boxShadow: "initial" },
      },
    },
  },
});

theme = createTheme(theme, {
  typography: {
    subtitle1: {
      color: theme.palette.primary.light,
    },
    subtitle2: {
      color: theme.palette.primary.dark,
      fontWeight: "400",
    },
  },
});

export default theme;
