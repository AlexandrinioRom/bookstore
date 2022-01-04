import { createTheme } from '@mui/material/styles';

const theme  = createTheme({
  palette: {
    primary: {main: '#4196a6'}
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        html {
          height: 100%;
        }
        body, #root {
          height: inherit
        }
      `
    }
  },
  
});

export default theme;
