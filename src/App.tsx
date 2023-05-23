import React, { useEffect, useState } from 'react';
import './App.css';
import Header from 'layout/Header';
import Main from 'layout/Main';
import Footer from 'layout/Footer';
import { ThemeProvider } from '@mui/system';
import { theme } from 'theme/theme';
import { BrowserRouter } from 'react-router-dom';
import ConnectionScreen from 'pages/ConnectionScreen';

function App() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
    };

    const handleOffline = () => {
      setIsOnline(false);
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return (
    <BrowserRouter>
    
      <ThemeProvider theme={theme}>
      {isOnline ? 
        <>
          <Header />
          <Main />
          <Footer />
        </>
       : 
        <ConnectionScreen />
       }
       
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
