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
    //   container: {
    //     textAlign: 'center',
    //     alignItems: 'center',
    // },
    },
  }));

  export default function () {
    const classes = useStyles();
    const checked = useWindowPosition('homepage');

    return (
      <div className={classes.root} id="info-image">
        <Collapse
        in={checked}
          {...(checked ? {timeout: 1000} : {})}
          collapsedHeight={50}
          >
          <div>
            <Scroll to="sign-up-form" smooth={true}>
              <center>
                <AboutMe checked={checked}/>

              </center>
            </Scroll>
          </div>
        </Collapse>
      </div>
    );
  }