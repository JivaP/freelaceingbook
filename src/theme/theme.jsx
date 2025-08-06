import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#D81B60', // vibrant pink/red
    },
    background: {
      default: '#fff',
    },
    text: {
      primary: '#1a1a1a',
      secondary: '#555',
    },
  },
  typography: {
    fontFamily: 'Lato, Montserrat, sans-serif',
  },
});

export default theme;
