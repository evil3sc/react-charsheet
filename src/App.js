import * as React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { HeadBar } from './components/HeadBar';
import Character from './pages/Character';
import Home from './pages/Home';
import NotFoundPage from './pages/NotFoundPage';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

function App() {
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        // light: will be calculated from palette.primary.main,
        main: '#ff4400',
        // dark: will be calculated from palette.primary.main,
        // contrastText: will be calculated to contrast with palette.primary.main
      },
      secondary: {
        light: '#0066ff',
        main: '#0044ff',
        // dark: will be calculated from palette.secondary.main,
        contrastText: '#ffcc00',
      },
      // Used by `getContrastText()` to maximize the contrast between
      // the background and the text.
      contrastThreshold: 3,
      // Used by the functions below to shift a color's luminance by approximately
      // two indexes within its tonal palette.
      // E.g., shift from Red 500 to Red 300 or Red 700.
      tonalOffset: 0.2,
    },
  });

  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <HeadBar />
        <Routes>
          <Route path="/" element={ <Home /> }>
          </Route>
          <Route path="character" element={ <Character /> }/>
          <Route path="*" element={ <NotFoundPage /> }/>
        </Routes>
      </ThemeProvider>
    </>
    
  );
}

export default App;
