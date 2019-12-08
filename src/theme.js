import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
  palette:{
    common:{
      black: "#2E2D29",
      white: "#ffffff",
    },
    background:{
      paper: "#fff",
      default: "#fafafa"
    },
    primary:{
      light: "#8D3C1E",
      main: "#8C1515",
      dark: "#5E3032",
      contrastText: "#ffffff"
    },
    secondary:{
      light: "#B6B1A9",
      main: "#4D4F53",
      dark: "#3F3C30",
      contrastText: "#ffffff"
    },
    error:{
      light: "#e57373",
      main: "#f44336",
      dark: "#d32f2f",
      contrastText: "#ffffff"
    },
    text:{
      primary: "#2E2D29",
      secondary: "rgba(0, 0, 0, 0.54)",
      disabled: "rgba(0, 0, 0, 0.38)",
      hint: "rgba(0, 0, 0, 0.38)"
    },
  },
  overrides: {
    MuiSwitch: {
      colorPrimary: {
        "&$checked": {
          color: "#0098db",
          "&+$track": {
            backgroundColor: "#0098db",
          },
        },
      }
    },
  },
});

export default theme;
