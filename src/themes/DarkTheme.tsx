import { createTheme } from "@mui/material";

const DarkTheme = createTheme({
  palette: {
    primary: {
      main: '#000000',
    },
    secondary: {
      main: '#ffffff',
    },
    error: {
      main: '#e00000',
    },
  },
  overrides: {
    MuiContainer: {
      root: {
        width: '100%',
      },
    },
  },
 
});

export default DarkTheme;