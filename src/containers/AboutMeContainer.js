import React from 'react';
import { AppBar, IconButton, Toolbar, Collapse, Fade } from '@material-ui/core';
import { Link as Scroll } from 'react-scroll';
import { makeStyles } from '@material-ui/core/styles';
import useWindowPosition from '../hook/useWindowPosition';
import AboutMe from '../components/AboutMe'
import NavBar from '../components/NavBar'

const useStyles = makeStyles((theme) => ({
    root: {
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      overflowX: 'hidden',
      marginLeft: 'auto',
      [theme.breakpoints.down('md')]: {
        flexDirection: 'column',
      },
    },
    appbar: {
        position: 'fixed',
    },
    icons: {
      height: '5rem'
    }
  }));

  export default function AboutMeContainer() {
    const classes = useStyles();
    const checked = useWindowPosition('about me');

    return (
        <div id="about me">
          <Fade
          in={checked}
          {...(checked ? {timeout: 2000} : {})}
          collapsedHeight={50}>
            <NavBar checked={checked}/> 

          </Fade>

        <div className={classes.root}>
            <Collapse
            in={checked}
            {...(checked ? {timeout: 2000} : {})}
            collapsedHeight={50}
            >
            <AboutMe checked={checked}/>
            </Collapse>
        </div>
      </div>
    );
  }