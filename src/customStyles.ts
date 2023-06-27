import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#323232",
      light: "#545454",
    },
    secondary: {
      main: "#E97F03",
      light: "#E99330",
      dark: "#E97F0380",
    },
    action: {
      hover: "#F2F2F2",
    },
  },
  typography: {
    fontFamily: "'Roboto', sans-serif",
    h1: {
      fontFamily: "inherit",
      fontSize: "1.5rem",
      fontWeight: "700",
      lineHeight: "1.75rem",
    },
    h2: {
      fontFamily: "inherit",
      fontWeight: "700",
      fontSize: "1.125rem",
      lineHeight: "1.3rem",
    },
    body1: {
      fontFamily: "inherit",
      fontWeight: "400",
      fontSize: "0.875rem",
      lineHeight: "1rem",
    },
    caption: {
      fontFamily: "inherit",
      fontWeight: "400",
      fontSize: "2.25rem",
      lineHeight: "2.625rem",
    },
    button: {
      fontFamily: "inherit",
      fontWeight: "400",
      fontSize: "1.5rem",
      lineHeight: "1.75rem",
      textTransform: "none",
    },
  },
});
