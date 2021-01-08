import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import ProfilePic from '../assets/profilepic.jpg'
import { CssBaseline } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

import Email from '../assets/email.png'
import Github from '../assets/github.png'
import Linkedin from '../assets/linkedin.png'
import Medium from '../assets/medium.png'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '80rem',
    // background: 'rgba(0,0,0,0.5)',
    // margin: '20px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: 'none',
    margin: '0',
    border: '0',
    overflowX: 'hidden'
  },
  media: {
    height: "35rem",
    width: "35rem"
  },
  stuff: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
    },
  },
  icons: {
    height: '5rem'
  },

}));

export default function AboutMe({ checked }) {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.root} id="about-me">
        <Grid item xs={ 3 } >
          <div id="social-links-div" className={classes.iconsdiv}>
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
        </Grid>
        <Grid item xs={ 5 } style={{margin: '2rem'}}>
          <Card checked={checked}>
              <CardMedia
              className={classes.media}
              image={ProfilePic}
              title="Profile Picture"
              />
          </Card>
        </Grid>
        <Grid item xs={ 5 } > 
          <Card style={{padding: '3rem'}}>
            Before my interest in programming, I was a full-time personal trainer and bartender on the side. Fitness and health was and is still a huge factor in my lifestyle. When the pandemic occurred, it helped me realize that I had to make a huge decision for myself. I wanted to continue training, but I was also concerned about my family’s well-being. I sought out the path of becoming a programmer to have the chance to provide for my family in case another pandemic were to occur in the future. I want to have a higher probability of keeping my job and continue supporting my family. In the process, I fell in love with programming and the endless amount of material I could possibly learn. Microstrategy is a company I want to work for because of the doors it could open up. It is a company that promotes diversity, innovation, and growth. I am very enthusiastic to continue learning and emerge in new experiences that Microstrategy has to offer. 
          </Card>
        </Grid>
      </div>
    </div>
  );
}