import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
  typography: {
    fontFamily: [
      'Recursive',
      'sans-serif',
    ].join(','),
  },
  palette: {
    primary: {
      main: '#303f9f',
    },
    secondary: {
      main: '#e64a19',
    },
    error: {
      main: red.A400,
    },
    myred: {
      main: '#d32f2f',
      contrastText: '#fff',
    },
  },
});

export default theme;
