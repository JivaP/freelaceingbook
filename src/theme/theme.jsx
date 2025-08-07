import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#fe0000d2', // vibrant pink/red from your logo
      contrastText: '#fff', // white text on primary buttons
    },
    secondary: {
      main: '#1a1a1a', // dark color for secondary elements
    },
    background: {
      default: '#fff', // white background
      paper: '#fff', // white for paper surfaces
    },
    text: {
      primary: '#1a1a1a', // main text color
      secondary: '#555', // secondary text color
    },
  },
  typography: {
    fontFamily: [
      'Poppins',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    h1: {
      fontWeight: 600,
    },
    h2: {
      fontWeight: 600,
    },
    h3: {
      fontWeight: 600,
    },
    button: {
      textTransform: 'none', // keeps button text normal case
      fontWeight: 500,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        '@font-face': {
          fontFamily: 'Poppins',
          fontStyle: 'normal',
          fontDisplay: 'swap',
          fontWeight: 400,
          src: `local('Poppins'), local('Poppins-Regular'), url(https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap) format('woff2')`,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8, // slightly rounded buttons
        },
      },
    },
  },
});

export default theme;