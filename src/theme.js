import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
  palette:{
    common:{
      black: "rgba(46, 45, 41, 1)",
      white: "#fff"
    },
    background:{
      paper: "#fff",
      default: "#fafafa"
    },
    primary:{
      light: "rgba(141, 60, 30, 1)",
      main: "rgba(140, 21, 21, 1)",
      dark: "rgba(94, 48, 50, 1)",
      contrastText: "#fff"
    },
    secondary:{
      light: "rgba(182, 177, 169, 1)",
      main: "rgba(77, 79, 83, 1)",
      dark: "rgba(63, 60, 48, 1)",
      contrastText: "#fff"
    },
    error:{
      light: "#e57373",
      main: "#f44336",
      dark: "#d32f2f",
      contrastText: "#fff"
    },
    text:{
      primary: "rgba(46, 45, 41, 1)",
      secondary: "rgba(0, 0, 0, 0.54)",
      disabled: "rgba(0, 0, 0, 0.38)",
      hint: "rgba(0, 0, 0, 0.38)"
    },
  }
});

export default theme;
