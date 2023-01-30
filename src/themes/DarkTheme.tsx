import { createTheme } from "@mui/material";

const DarkTheme = createTheme({
  palette: {
    primary: {
      main: "#212121",
      light: "#484848",
      dark: "#000000",
    },
    secondary: {
      main: "#4dd0e1",
      light: "#88ffff",
      dark: "#009faf",
      
    },
    grey: {
      50: "#fafafa",
      100: "#f5f5f5",
      200: "#eeeeee",
      300: "#e0e0e0",
      400: "#bdbdbd",
    },
    error: {
      main: "#e00000",
    },
    text: {
      primary: "#000000",
      secondary: "#FFFFFF",
    },
  },
});

export default DarkTheme;
