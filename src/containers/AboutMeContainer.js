import React from 'react';
import { AppBar, IconButton, Toolbar, Collapse } from '@material-ui/core';
import { Link as Scroll } from 'react-scroll';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

import useWindowPosition from '../hook/useWindowPosition';
import AboutMe from '../components/AboutMe'

const useStyles = makeStyles((theme) => ({
    root: {
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      // backgroundColor: 'red',
      overflowX: 'hidden',
      marginLeft: 'auto',
      [theme.breakpoints.down('md')]: {
        flexDirection: 'column',
      },
    },
    appbar: {
        backgroundColor: 'transparent',
        boxShadow: '0px 0px 0px 0px',
        margin: '0',
        border: '0'
    },
    appbarWrapper: {
        width: '80%',
        margin: '0 auto',
        boxShadow: 'none'
    },
    appbarTitle: {
        flexGrow: '1',
        boxShadow: 'none'
    },
    icon: {
        color: 'black',
        fontSize: '2rem',
    },
    colorText: {
        color: '#1a904b',
    },
    container: {
        textAlign: 'center',
    },
    title: {
        color: 'black',
        fontSize: '4.5rem',
    },
    div:{
        margin: '0',
        border: '0'
    }
  }));

  export default function () {
    const classes = useStyles();
    const checked = useWindowPosition('welcome');

    return (
      <div className={classes.root}>
          <CssBaseline />
          <AppBar className={classes.appbar}>
            <Toolbar className={classes.appbarWrapper} >
                <h1 className={classes.appbarTitle}>
                    amy sikhammountry
                    {/* <img src={TopLogo} style={{marginLeft: '80rem', height: '8rem'}}/>  */}
                </h1>
                navbar?
            </Toolbar>
        </AppBar>

        <Collapse
        in={checked}
          {...(checked ? {timeout: 1000} : {})}
          collapsedHeight={50}
          >
          <div>
              <center>
                <AboutMe checked={checked}/>
              </center>
          </div>
        </Collapse>
      </div>
    );
  }