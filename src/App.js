import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import pink from './assets/pink.jpg'

import './App.css';
import AboutMe from './components/AboutMe'
import Projects from './components/Projects'
import Contact from './components/Contact'
import WelcomePage from './components/WelcomePage'

const useStyles = makeStyles((theme) => ({
    bg: {
        minHeight: '100vh',
        backgroundImage: `url(${pink})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      },
    }));

    
function App() {
    const classes = useStyles();

  return (
    <BrowserRouter>
    <div className={classes.bg}>
        <CssBaseline />
        <Switch>
          <div>
            <Route exact path="/" component={WelcomePage} />
            <Route path="/aboutme" component={AboutMe} />
            <Route path="/projects" component={Projects} />
            <Route path="/contact" component={Contact} />
          </div>
        </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
