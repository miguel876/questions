import React from 'react';
import './App.css';
import Header from 'layout/Header';
import Main from 'layout/Main';
import Footer from 'layout/Footer';
import { ThemeProvider } from '@mui/system';
import { theme } from 'theme/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Main />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
