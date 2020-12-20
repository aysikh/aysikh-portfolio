import React from 'react';
import { AppBar, IconButton, Toolbar, Collapse, Fade } from '@material-ui/core';
import { Link as Scroll } from 'react-scroll';
import { makeStyles } from '@material-ui/core/styles';
import useWindowPosition from '../hook/useWindowPosition';
import AboutMe from '../components/AboutMe'
import NavBar from '../components/NavBar'
import Email from '../assets/email.png'
import Github from '../assets/github.png'
import Linkedin from '../assets/linkedin.png'
import Medium from '../assets/medium.png'

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
        // position: '-webkit-sticky',
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
          <NavBar checked={checked}/> 
          <div id="social-links-div">
            <a href={`mailto:amy.sikhammountry@gmail.com`} >
              <img src={Email} alt='' className={classes.icons} />
            </a><br></br>
            <a href="https://github.com/aysikh" rel="noopener noreferrer" target="_blank" >
              <img src={Github} alt='' className={classes.icons} />
            </a><br></br>
            <a href="https://www.linkedin.com/in/aysikh" rel="noopener noreferrer" target="_blank" >
              <img src={Linkedin} alt='' className={classes.icons} />
            </a><br></br>
            <a href="https://medium.com/aysikh" rel="noopener noreferrer" target="_blank" >
              <img src={Medium} alt='' className={classes.icons} />
            </a>
          </div>
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