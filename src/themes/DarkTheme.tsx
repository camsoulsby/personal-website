import { createTheme } from "@mui/material";

const DarkTheme = createTheme({
  palette: {
    primary: {
      main: '#000000',
    },
    secondary: {
      main: '#EEE3D2',
    },
    error: {
      main: '#e00000',
    },
  },
});

export default DarkTheme;