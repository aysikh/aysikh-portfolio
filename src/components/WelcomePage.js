import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import { Route, Switch, Redirect, Link } from 'react-router-dom';
import { IconButton, Collapse, Fade } from '@material-ui/core';
import { Link as Scroll } from 'react-scroll';

import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import Grid from '@material-ui/core/Grid';

import AboutMeContainer from '../containers/AboutMeContainer'
import Bootstrap from '../assets/bootstrap.png'
import CSS from '../assets/css.png'
import Heroku from '../assets/heroku.png'
import HTML from '../assets/html.png'
import JS from '../assets/javascript.png'
import Material from '../assets/material.png'
import Rails from '../assets/rails.png'
import Reacticon from '../assets/react.png'
import Ruby from '../assets/ruby.png'
import Sass from '../assets/sass.png'

  const useStyles = makeStyles((theme) => ({
      root: {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          boxShadow: 'none',
          margin: '0',
          border: '0',
          overflowX: 'hidden'
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
      },
      icons:{
        height: '4.5rem'
      }
      }));

  export default function Header() {
      const classes = useStyles();
      const [checked, setChecked] = useState(false);
      useEffect(() => {
          setChecked(true);
      }, []);


  return (
      <div className={classes.div}>
        <div className={classes.root} id="welcome">
          {/* <Grid container spacing={ 16 } style={ { padding: '5rem', marginTop: '8rem' } }> */}
            <Grid item xs={ 1 }>
              <Collapse
              in={checked}
              {...(checked ? {timeout: 2000 } : {})}
              // collapsedHeight={50}
              >
                <div className={classes.container} id="icons"> 
                  <img src={Ruby} alt='ruby' className={classes.icons} />
                  <br/>
                  <img src={Rails} alt='rubyonrails' className={classes.icons} />
                  <br/>
                  <img src={JS} alt='javascript' className={classes.icons} />
                  <br/>
                  <img src={Reacticon} alt='react' className={classes.icons} />
                  <br/>
                  <img src={HTML} alt='react' className={classes.icons} />
                  <br/>
                  <img src={CSS} alt='react' className={classes.icons} />
                  <br/>
                  <img src={Bootstrap} alt='react' className={classes.icons} />
                  <br/>
                  <img src={Material} alt='react' className={classes.icons} />
                  <br/>
                  <img src={Sass} alt='react' className={classes.icons} />
                  <br/>
                  <img src={Heroku} alt='react' className={classes.icons} />
                  <br/>
                </div>
              </Collapse>
            </Grid>
            <Grid item xs={ 8 } style= {{marginTop: '10rem', marginLeft: '-5rem'}}>
              <Fade
                in={checked}
                {...(checked ? { timeout: 2000 } : {})}
                collapsedHeight={50}
                >
                  <div className={classes.container}>
                    <h1 className={classes.title}>
                        <span style={{color: '#f8bbd0'}}>amy sikhammountry</span>
                        <br/> 
                        full-stack developer
                    </h1>
                    <h3>learn more about me below </h3>

                    <Scroll to="about me" smooth={true}>
                        <IconButton>
                            <KeyboardArrowDownIcon style={{color: '#c48b9f', fontSize: '5rem'}} />
                        </IconButton>
                    </Scroll>
                  </div>
              </Fade>
            </Grid>
          {/* </Grid> */}
          </div>
          <AboutMeContainer />

      </div>
  );
  }

