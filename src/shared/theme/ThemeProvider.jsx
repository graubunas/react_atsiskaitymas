import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components';

const theme = {
  palette: {
    default: {
      main: 'rgb(255, 255, 255)',
      dark: 'rgb(192,192,192)',
    },
    dark: {
      main: 'rgb(0, 0, 0)',
    },
    primary: {
      main: 'rgb(242, 135, 125)',
      dark: 'rgb(240, 70, 54)',
    },
    facebook: {
      main: 'rgb(79, 112, 181)',
    },
    module: {
      main: 'rgb(137, 135, 135)',
    },
    overlay: {
      light: 'rgba(0, 0, 0, 0.15)',
      main: 'rgba(0, 0, 0, 0.3)',
      dark: 'rgba(0, 0, 0, 0.6)',
    },
  },
};

const ThemeProvider = ({ children }) => {
  return (
    <StyledComponentsThemeProvider theme={theme}>
      {children}
    </StyledComponentsThemeProvider>
  );
};

export default ThemeProvider;
