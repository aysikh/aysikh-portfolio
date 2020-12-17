import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import WelcomePage from './components/WelcomePage'
import AboutMe from './components/AboutMe'
import pink from './assets/pink.jpg'
import './App.css';

const useStyles = makeStyles((theme) => ({
    bg: {
        minHeight: '100vh',
        backgroundImage: `url(${pink})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      },
    }));

    
function App() {
  return (
    <div>
        <CssBaseline />
        <WelcomePage />
        <AboutMe />
    </div>
  );
}

export default App;
