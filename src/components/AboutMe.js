import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import ProfilePic from '../assets/profilepic.jpg'
import { CssBaseline } from '@material-ui/core';

import Email from '../assets/email.png'
import Github from '../assets/github.png'
import Linkedin from '../assets/linkedin.png'
import Medium from '../assets/medium.png'

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 645,
    background: 'rgba(0,0,0,0.5)',
    margin: '20px',
  },
  media: {
    height: "35rem",
    width: "30rem"
  },
  stuff: {
    // minHeight: '100vh',
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
  // iconsdiv: {
  //   marginLeft: '10rem'
  // }

}));

export default function AboutMe({ checked }) {
  const classes = useStyles();

  return (
    <div>
      <div>
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
        <div>
            {/* <div className={classes.root}> */}
                <Card checked={checked}>
                    <CardMedia
                    className={classes.media}
                    image={ProfilePic}
                    title="Profile Picture"
                    />
                </Card>
                <Card >
                    just a scrub doing scrub things
                </Card>
                {/* </div> */}
        </div>
      </div>
    </div>
  );
}