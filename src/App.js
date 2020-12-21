import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import pink from './assets/pink.jpg'

import './App.css';
import AboutMe from './components/AboutMe'
import Projects from './components/Projects'
import Resume from './components/Resume'
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
    <div className={classes.bg}>
    <BrowserRouter>
        <CssBaseline />
        <Switch>
          <div>
            <Route exact path="/" component={WelcomePage} />
            <Route exact path="/aboutme" component={AboutMe} />
            <Route exact path="/projects" component={Projects} />
            <Route exact path="/contact" component={Resume} />
          </div>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
