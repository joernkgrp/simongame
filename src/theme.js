import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "#303f9f",
    },
    secondary: {
      main: "#e64a19",
    },
    error: {
      main: red.A400,
    },
    myred: {
      main: "#d32f2f",
      contrastText: "#fff",
    },
  },
  typography: {
    fontFamily: ["Outfit", "sans-serif"].join(","),
    h1: {
      fontWeight: 600,
      fontSize: "1.75rem",
    },
    h2: {
      fontWeight: 400,
      fontSize: "1.25rem",
      color: "primary.dark",
    },
  },
});

export default theme;
